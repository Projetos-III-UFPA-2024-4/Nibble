from repositories.repository_pedido import repository_pedido

class ServicePedido:
    def listar(self):
        """Retorna todos os pedidos"""
        pedidos = repository_pedido.listar()
        return pedidos

service_pedido = ServicePedido()