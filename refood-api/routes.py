from flask import jsonify, make_response, request
from controllers.controller_categoria import controller_categoria
from controllers.controller_empresa import controller_empresa
from controllers.controller_pedido import controller_pedido
from controllers.controller_usuario import controller_usuario
from auth_token import validate_jwt, create_jwt

def init_app(app):

    @app.route('/categorias', methods=['GET'])
    @validate_jwt
    def listar_categorias(id_usuario=None):
        return controller_categoria.listar()

    @app.route('/empresas/destaques', methods=['GET'])
    @validate_jwt
    def listar_empresas_destaque(id_usuario=None):
        # Chamar método equivalente ao controllerEmpresa.Destaques
        return controller_empresa.destaques(id_usuario)
    
    @app.route('/empresas', methods=['GET'])
    @validate_jwt
    def listar_empresas(id_usuario=None):
        return controller_empresa.listar(id_usuario)

    @app.route('/empresas/<int:id_empresa>/favoritos', methods=['POST'])
    @validate_jwt
    def inserir_favorito(id_empresa, id_usuario=None):
        return controller_empresa.inserir_favorito(id_empresa, id_usuario)

    @app.route('/empresas/<int:id_empresa>/favoritos', methods=['DELETE'])
    @validate_jwt
    def excluir_favorito(id_empresa, id_usuario=None):
        return controller_empresa.excluir_favorito(id_empresa, id_usuario)

    @app.route('/empresas/<int:id_empresa>/cardapio', methods=['GET'])
    @validate_jwt
    def cardapio(id_empresa, id_usuario=None):
        return controller_empresa.cardapio(id_empresa, id_usuario)
    
    @app.route('/empresas/<int:id_empresa>/produtos/<int:id_produto>', methods=['GET'])
    @validate_jwt
    def listar_produto_id(id_empresa, id_produto, id_usuario=None):
        return controller_empresa.listar_produto_id(id_empresa, id_produto, id_usuario)

    @app.route('/pedidos', methods=['GET'])
    @validate_jwt
    def listar_pedidos(id_usuario=None):
        # Implementar lógica para listar pedidos
        return controller_pedido.listar(id_usuario)
    
    @app.route('/pedidos/<int:id_pedido>', methods=['GET'])
    @validate_jwt
    def listar_pedido_por_id(id_pedido, id_usuario=None):
        return controller_pedido.listarid(id_pedido, id_usuario)
    
    @app.route('/pedidos', methods=['POST'])
    @validate_jwt
    def inserir_pedido(id_usuario=None):
        return controller_pedido.inserir(id_usuario)

    @app.route('/usuarios/favoritos', methods=['GET'])
    @validate_jwt
    def listar_favoritos(id_usuario=None):
        return controller_usuario.favoritos(id_usuario)

    @app.route('/usuarios/login', methods=['POST'])
    def login():
        return controller_usuario.login()
    
    @app.route('/usuarios', methods=['POST'])
    def inserir():
        return controller_usuario.inserir()
    
    @app.route('/usuarios/perfil', methods=['GET'])
    @validate_jwt
    def perfil(id_usuario=None):
        return controller_usuario.perfil(id_usuario)