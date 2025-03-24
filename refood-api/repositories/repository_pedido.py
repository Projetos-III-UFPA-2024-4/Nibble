from database.sqlite_connection import execute

class RepositoryPedido:
    def listar(self):
        """Retorna todas as pedidos ordenadas por ordem"""
        sql = "SELECT p.*, e.nome, e.icone FROM pedido p join empresa e on (e.id_empresa = p.id_empresa) ORDER BY p.id_pedido desc"
        pedidos = execute(sql)
        return pedidos
    
    def listarid(self, id_pedido):
        """
        Retorna um pedido específico pelo ID, incluindo itens do pedido.
        """
        # Consulta para o pedido
        sql_pedido = """
        SELECT p.*, e.nome AS nome_empresa, e.icone AS icone_empresa
        FROM pedido p
        JOIN empresa e ON (e.id_empresa = p.id_empresa)
        WHERE p.id_pedido = ?
        ORDER BY p.id_pedido DESC
        """

        # Consulta para os itens do pedido
        sql_itens = """
        SELECT i.*, prod.nome AS nome_produto, prod.descricao, prod.icone AS icone_produto
        FROM pedido_item i
        JOIN produto prod ON (prod.id_produto = i.id_produto)
        WHERE i.id_pedido = ?
        ORDER BY i.id_item
        """

        pedido = execute(sql_pedido, [id_pedido])
        if not pedido:
            return None  # Se não encontrar o pedido, retorna None

        itens = execute(sql_itens, [id_pedido])

        # Anexa os itens ao primeiro (e único) registro do pedido
        single_pedido = pedido[0]
        single_pedido['itens'] = itens
        return single_pedido

    def inserir(self, id_usuario, dados):
        """Insere um novo pedido e seus itens"""
        # Dados pedido
        sql = """insert into pedido(id_usuario, id_empresa, vl_subtotal, 
                 vl_taxa_entrega, vl_total, dt_pedido, status) 
                 values(?, ?, ?, ?, ?, CURRENT_TIMESTAMP, 'P')
                 returning id_pedido"""
    
        pedido = execute(sql, [id_usuario, dados['id_empresa'], dados['vl_subtotal'],
                              dados['vl_taxa_entrega'], dados['vl_total']])
    
        if not pedido or len(pedido) == 0:
            return None
    
        id_pedido = pedido[0]['id_pedido']
    
        # Dados dos itens
        for item in dados['itens']:
            sql_item = """insert into pedido_item(id_pedido, id_produto, obs, qtd, vl_unitario, vl_total)
                          values(?, ?, ?, ?, ?, ?)"""
        
            execute(sql_item, [id_pedido, item['id_produto'], item.get('obs', ''), 
                              item['qtd'], item['vl_unitario'], item['vl_total']])
    
        return pedido[0]    

repository_pedido = RepositoryPedido()