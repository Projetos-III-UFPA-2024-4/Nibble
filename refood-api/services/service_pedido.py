from repositories.repository_pedido import repository_pedido

class ServicePedido:
    def listar(self):
        """Retorna todos os pedidos"""
        pedidos = repository_pedido.listar()
        return pedidos
    
    def listarid(self, id_pedido):
        return repository_pedido.listarid(id_pedido)
    
    def inserir(self, id_usuario, dados):
        """Insere um novo pedido para o usuário."""
        return repository_pedido.inserir(id_usuario, dados)

service_pedido = ServicePedido()