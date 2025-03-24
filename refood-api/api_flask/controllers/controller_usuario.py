from flask import jsonify, make_response, request
from services.service_usuario import service_usuario
from auth_token import create_jwt

class ControllerUsuario:
    def favoritos(self, id_usuario):
        try:
            favoritos = service_usuario.favoritos(id_usuario)
            return make_response(
                jsonify(favoritos),
                200
            )
        except Exception as e:
            return make_response(
                jsonify({'erro': str(e)}),
                500
            )

    def login(self):
        """
        Substitui a lógica anterior que verificava apenas um email/senha fixos.
        """
        try:
            data = request.get_json() or {}
            email = data.get('email')
            senha = data.get('senha')

            usuario = service_usuario.login(email, senha)
            # Caso login retorne uma lista vazia ou None,
            # significa 'E-mail ou senha inválida'
            if not usuario:
                return make_response(
                    jsonify({"error": "E-mail ou senha inválida"}),
                    401
                )
            else:
                return make_response(jsonify(usuario), 200)
        except Exception as e:
            return make_response(jsonify({'erro': str(e)}), 500)

    def inserir(self):
        try:
            data = request.get_json() or {}
            nome = data.get('nome')
            email = data.get('email')
            senha = data.get('senha')
            endereco = data.get('endereco')
            numero = data.get('numero')
            bairro = data.get('bairro')
            cidade = data.get('cidade')
            uf = data.get('uf')
            cep = data.get('cep')

            # Exemplo de método no service para inserir novo usuário:
            usuario = service_usuario.inserir(
                nome, email, senha, endereco, numero, bairro, cidade, uf, cep
            )

            # Gera token para o novo usuário
            usuario['token'] = create_jwt(usuario['id_usuario'])

            return make_response(jsonify(usuario), 201)
        except Exception as e:
            return make_response(jsonify({'erro': str(e)}), 500)
        
    def perfil(self, id_usuario=None):

        try:
            # Use diretamente o id_usuario recebido por parâmetro
            usuario = service_usuario.perfil(id_usuario)
            return make_response(jsonify(usuario), 200)
        except Exception as e:
            return make_response(jsonify({'erro': str(e)}), 500)

controller_usuario = ControllerUsuario()