from flask import jsonify, make_response, request
from services.service_empresa import service_empresa

class ControllerEmpresa:
    def destaques(self, id_usuario=None):
        try:
         # Caso queira usar id_usuario no serviço:
            id_usuario = getattr(request, "id_usuario", None)
            empresas = service_empresa.destaques(id_usuario)

            return make_response(jsonify(empresas), 200)
        except Exception as e:
            return make_response(jsonify({"erro": str(e)}), 500)

    def listar(self, id_usuario=None):
        try:
            # Recupera id_usuario inserido pelo decorador validate_jwt
            id_usuario = getattr(request, "id_usuario", None)
            # Se o professor envia a busca como query string "?busca=..."
            busca = request.args.get('busca', None)
        
            empresas = service_empresa.listar(id_usuario, busca)
            return make_response(jsonify(empresas), 200)
        except Exception as error:
            return make_response(jsonify({"error": str(error)}), 500)

    def inserir_favorito(self, id_empresa, id_usuario=None):
        try:
            # NÃO precisamos mais de "id_usuario = getattr(request, 'id_usuario', None)"
            if not id_usuario:
                return make_response(jsonify({"error": "ID de usuário não encontrado"}), 400)

            if not id_empresa:
                return make_response(jsonify({"error": "ID de empresa não encontrado"}), 400)

            favorito = service_empresa.inserir_favorito(id_usuario, id_empresa)
            if not favorito:
                return make_response(jsonify({"error": "Não foi possível adicionar favorito"}), 404)

            return make_response(jsonify(favorito), 201)

        except Exception as error:
            import traceback
            return make_response(jsonify({
                "error": str(error),
                "traceback": traceback.format_exc()
            }), 500)
        
    def excluir_favorito(self, id_empresa, id_usuario=None):
        try:
            # Não usamos mais getattr(request, "id_usuario", None)
            if not id_usuario:
                return make_response(jsonify({"error": "ID de usuário não encontrado"}), 400)
        
            if not id_empresa:
                return make_response(jsonify({"error": "ID de empresa não encontrado"}), 400)
            
            resultado = service_empresa.excluir_favorito(id_usuario, id_empresa)
        
            # Se não retornou nada, pode ser que o favorito não existia
            if resultado is None:
                return make_response(jsonify({"message": "Favorito não encontrado"}), 404)
            
            return make_response(jsonify(resultado), 200)
        except Exception as error:
            import traceback
            return make_response(jsonify({
                "error": str(error),
                "traceback": traceback.format_exc()
            }), 500)

    def cardapio(self, id_empresa, id_usuario=None):
        try:
            id_usuario = getattr(request, "id_usuario", None)
            empresas = service_empresa.cardapio(id_usuario, id_empresa)
            return make_response(jsonify(empresas), 200)
        except Exception as error:
            return make_response(jsonify({"error": str(error)}), 500)
        

    def listar_produto_id(self, id_empresa, id_produto, id_usuario=None):
        try:
            if not id_empresa:
                return make_response(jsonify({"error": "ID de empresa não encontrado"}), 400)
        
            if not id_produto:
                return make_response(jsonify({"error": "ID de produto não encontrado"}), 400)
            
            produto = service_empresa.listar_produto_id(id_empresa, id_produto, id_usuario)
        
            if not produto:
                return make_response(jsonify({"error": "Produto não encontrado"}), 404)
            
            return make_response(jsonify(produto), 200)
        except Exception as error:
            import traceback
            return make_response(jsonify({
                "error": str(error),
                "traceback": traceback.format_exc()
            }), 500)

controller_empresa = ControllerEmpresa()