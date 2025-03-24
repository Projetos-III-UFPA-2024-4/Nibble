from repositories.repository_empresa import repository_empresa

class ServiceEmpresa:
    def destaques(self, id_usuario=None):
        # Se precisar usar id_usuario na query, passe ao repository.
        return repository_empresa.destaques(id_usuario)

    def listar(self, id_usuario, busca=None):
        """Lista empresas, possivelmente filtrando por 'busca'."""
        return repository_empresa.listar(id_usuario, busca)

    def inserir_favorito(self, id_usuario, id_empresa):
        """Insere favorita para um usuário."""
        return repository_empresa.inserir_favorito(id_usuario, id_empresa)

    def excluir_favorito(self, id_usuario, id_empresa):
        """Exclui favorito para um usuário."""
        return repository_empresa.excluir_favorito(id_usuario, id_empresa)

    def cardapio(self, id_usuario, id_empresa):
        """Retorna o cardápio da empresa para um usuário."""
        return repository_empresa.cardapio(id_usuario, id_empresa)
    
    def listar_produto_id(self, id_empresa, id_produto, id_usuario=None):
        """Retorna informações de um produto específico de uma empresa."""
        return repository_empresa.listar_produto_id(id_empresa, id_produto, id_usuario)

service_empresa = ServiceEmpresa()