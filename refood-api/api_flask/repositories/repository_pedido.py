from database.sqlite_connection import execute

class RepositoryPedido:
    def listar(self):
        """Retorna todas as pedidos ordenadas por ordem"""
        sql = "SELECT p.*, e.nome, e.icone FROM pedido p join empresa e on (e.id_empresa = p.id_empresa) ORDER BY p.id_pedido desc"
        pedidos = execute(sql)
        return pedidos

repository_pedido = RepositoryPedido()