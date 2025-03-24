from flask import jsonify, make_response
from services.service_categoria import service_categoria

class ControllerCategoria:
    def listar(self):
        try:
            categorias = service_categoria.listar()
            
            return make_response(
                jsonify(
                    mensagem='Listagem de categorias',
                    data=categorias
                ), 200
            )
        except Exception as e:
            return make_response(
                jsonify(
                    erro=str(e)
                ), 500
            )

controller_categoria = ControllerCategoria()