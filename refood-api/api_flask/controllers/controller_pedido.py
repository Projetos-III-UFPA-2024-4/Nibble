from flask import jsonify, make_response, request
from services.service_pedido import service_pedido

class ControllerPedido:
    def listar(self):
        try:
            pedidos = service_pedido.listar()
            
            return make_response(
                jsonify(
                    mensagem='Listagem de pedidos',
                    data=pedidos
                ), 200
            )
        except Exception as e:
            return make_response(
                jsonify(
                    erro=str(e)
                ), 500
            )
    def listarid(self, id_pedido):
        try:
            pedido = service_pedido.listarid(id_pedido)
            return make_response(
                jsonify(
                    mensagem='Listagem de pedido',
                    data=pedido
                ), 200
            )
        except Exception as e:
            return make_response(
                jsonify(
                    erro=str(e)
                ), 500
            )

    def inserir(self, id_usuario=None):
        try:
            if not id_usuario:
                return make_response(jsonify({"error": "ID de usuário não encontrado"}), 400)
            
            # Pega os dados do pedido do corpo da requisição
            dados_pedido = request.json
        
            if not dados_pedido:
                return make_response(jsonify({"error": "Dados do pedido não informados"}), 400)
            
            pedido = service_pedido.inserir(id_usuario, dados_pedido)
        
            if not pedido:
                return make_response(jsonify({"error": "Não foi possível inserir o pedido"}), 500)
            
            return make_response(jsonify(pedido), 201)
        except Exception as error:
            import traceback
            return make_response(jsonify({
                "error": str(error),
                "traceback": traceback.format_exc()
            }), 500)

controller_pedido = ControllerPedido()