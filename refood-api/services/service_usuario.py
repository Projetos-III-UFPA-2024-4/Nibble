from repositories.repository_usuario import repository_usuario
from auth_token import create_jwt
import bcrypt

class ServiceUsuario:
    def favoritos(self, id_usuario):
        """Obtém os favoritos de um usuário."""
        return repository_usuario.favoritos(id_usuario)
    
    def inserir(self, nome, email, senha, endereco, numero, bairro, cidade, uf, cep):
        """
        1. Verifica se já existe um usuário com esse e-mail.
        2. Criptografa a senha.
        3. Insere o usuário no banco.
        4. Gera token e retorna o usuário.
        """
        # 1. Verifica se já existe e lança exceção se encontrar
        usuario_existente = repository_usuario.listar_by_email(email)
        if usuario_existente and usuario_existente.get("id_usuario"):
            raise Exception("Já existe uma conta criada com esse e-mail")
        
        # 2. Criptografa a senha
        hashed_senha = bcrypt.hashpw(senha.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        # 3. Insere o usuário no banco
        novo_usuario = repository_usuario.inserir(
            nome, email, hashed_senha, endereco,
            numero, bairro, cidade, uf, cep
        )
        
        # 4. Gera token e retorna
        novo_usuario["token"] = create_jwt(novo_usuario["id_usuario"])

        novo_usuario["nome"] = nome
        novo_usuario["email"] = email
        novo_usuario["endereco"] = endereco
        novo_usuario["bairro"] = bairro
        novo_usuario["cidade"] = cidade
        novo_usuario["uf"] = uf
        novo_usuario["cep"] = cep

        return novo_usuario
    
    def login(self, email, senha):
        """
        1. Busca usuario por email.
        2. Se não achar ou a lista for vazia, retorna [].
        3. Valida a senha com bcrypt.
        4. Remove a senha do objeto, gera token, retorna o usuario ou []
        """
        usuario = repository_usuario.listar_by_email(email)
        if not usuario:
            # Não encontrou usuário
            return []
        
        # 3. Verifica a senha com bcrypt
        hashed_senha = usuario.get("senha")
        if hashed_senha and bcrypt.checkpw(senha.encode('utf-8'), hashed_senha.encode('utf-8')):
            # 4. Remove senha, gera token, retorna
            usuario.pop("senha", None)
            usuario["token"] = create_jwt(usuario["id_usuario"])
            return usuario
        else:
            return []
        
    def perfil(self, id_usuario):
        """
        Retorna os dados do usuário pelo ID (sem expor senha), caso exista.
        """
        usuario = repository_usuario.listar_by_id(id_usuario)
        if usuario:
            usuario.pop("senha", None)  # remove campo senha
        return usuario

# Instância da classe para ser usada no controller
service_usuario = ServiceUsuario()