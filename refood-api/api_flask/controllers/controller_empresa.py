from flask import jsonify, make_response
from services.service_empresa import service_empresa

class ControllerEmpresa:
    def destaques(self):
        try:
            empresas = service_empresa.destaques()
            
            return make_response(
                jsonify(
                    mensagem='Empresas em destaque',
                    data=empresas
                ), 200
            )
        except Exception as e:
            return make_response(
                jsonify(
                    erro=str(e)
                ), 500
            )

controller_empresa = ControllerEmpresa()