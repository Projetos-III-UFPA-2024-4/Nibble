from flask import jsonify, make_response, request
from controllers.controller_categoria import controller_categoria
from controllers.controller_empresa import controller_empresa
from controllers.controller_pedido import controller_pedido

def init_app(app):
    
    @app.route('/usuarios/login', methods=['POST'])
    def login():
        # Implementar lógica de login
        data = request.get_json()
        return make_response(
            jsonify(
                mensagem='Login em desenvolvimento'
            ), 200
        )

    @app.route('/usuarios', methods=['POST'])
    def create_user():
        # Implementar lógica de criação de usuário
        data = request.get_json()
        return make_response(
            jsonify(
                mensagem='Criação de usuário em desenvolvimento'
            ), 201
        )

    @app.route('/restaurantes', methods=['GET'])
    def get_restaurantes():
        # Implementar lógica para listar restaurantes
        return make_response(
            jsonify(
                mensagem='Listagem de restaurantes em desenvolvimento',
                data=[]
            ), 200
        )

    @app.route('/categorias', methods=['GET'])
    def listar_categorias():
        # Chamar método equivalente ao controllerCategoria.Listar
        return controller_categoria.listar()

    @app.route('/empresas/destaques', methods=['GET'])
    def listar_empresas_destaque():
        # Chamar método equivalente ao controllerEmpresa.Destaques
        return controller_empresa.destaques()

    @app.route('/pedidos', methods=['GET'])
    def listar_pedidos():
        # Implementar lógica para listar pedidos
        return controller_pedido.listar()
    
    @app.route('/pedidos/:id_pedido', methods=['GET'])
    def listar_pedidos():
        # Implementar lógica para listar pedidos
        return controller_pedido.listarid()