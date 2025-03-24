import jwt
from flask import request, jsonify
from functools import wraps

SECRET_TOKEN = "MYSECRET@123"

def create_jwt(id_usuario):
    """
    Gera um token JWT com o id do usuário.
    """
    token = jwt.encode(
        {"id_usuario": id_usuario},
        SECRET_TOKEN,
        algorithm="HS256"
    )
    # PyJWT devolve um objeto bytes no Python 3,
    # podemos decodificar para string se necessário:
    return token

def validate_jwt(f):
    """
    Decorador que valida o JWT.
    Caso seja inválido ou não enviado, retorna 401.
    """

    @wraps(f)
    def decorated_function(*args, **kwargs):
        auth_token = request.headers.get('Authorization', None)

        if not auth_token:
            return jsonify({"error": "Token não informado"}), 401

        # Esperamos algo como "Bearer <TOKEN>", se segue o padrão "Bearer"
        try:
            scheme, token = auth_token.split()
            if scheme.lower() != "bearer":
                return jsonify({"error": "Cabeçalho de autorização inválido"}), 401
        except ValueError:
            return jsonify({"error": "Cabeçalho de autorização inválido"}), 401

        try:
            decoded = jwt.decode(token, SECRET_TOKEN, algorithms=["HS256"])
            # Salva id_usuario dentro do kwargs ou via g (objeto global do Flask)
            kwargs['id_usuario'] = decoded.get('id_usuario')
        except jwt.exceptions.InvalidTokenError:
            return jsonify({"error": "Token inválido"}), 401

        return f(*args, **kwargs)

    return decorated_function