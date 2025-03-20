from flask import jsonify, make_response
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

controller_pedido = ControllerPedido()