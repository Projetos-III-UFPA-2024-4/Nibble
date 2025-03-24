from database.sqlite_connection import execute

class RepositoryEmpresa:
    def listar(self, id_usuario=None, busca=None):
        """Retorna todas as empresas"""
        filtro = [id_usuario]

        sql = """select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
        from empresa e
        left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)"""

        if busca:
            filtro.append(f"%{busca}%")
            sql = sql + " where e.nome like ?"

        sql = sql + " order by e.nome"

        empresas = execute(sql, filtro)
        return empresas
        
    def destaques(self, id_usuario):
        """Retorna empresas em destaque"""
        sql = """select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
        from destaque d
        join empresa e on (e.id_empresa = d.id_empresa)
        left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)
        order by d.ordem"""
        
        empresas = execute(sql, [id_usuario])
        return empresas
    
    def inserir_favorito(self, id_usuario, id_empresa):
        """Adiciona empresa aos favoritos do usuário"""
        self.excluir_favorito(id_usuario, id_empresa)
        
        sql = """insert into usuario_favorito(id_usuario, id_empresa) values(?, ?) 
        returning id_favorito"""
        
        fav = execute(sql, [id_usuario, id_empresa])
        return fav[0] if isinstance(fav, list) and len(fav) > 0 else None
    
    def excluir_favorito(self, id_usuario, id_empresa):
        """Remove empresa dos favoritos do usuário"""
        # Primeiro verificamos se o favorito existe
        sql_check = """SELECT id_favorito FROM usuario_favorito 
                  WHERE id_empresa = ? AND id_usuario = ?"""
    
        result = execute(sql_check, [id_empresa, id_usuario])
    
        # Se não existir, retornamos None
        if not result or len(result) == 0:
            return None
    
        # Se existir, deletamos
        sql_delete = """DELETE FROM usuario_favorito 
                       WHERE id_empresa = ? AND id_usuario = ? 
                       RETURNING id_favorito"""
    
        fav = execute(sql_delete, [id_empresa, id_usuario])
    
        # Retornamos o resultado da operação
        if fav and len(fav) > 0:
            return fav[0]  # Retorna o primeiro item da lista
        else:
            return {"message": "Favorito removido com sucesso"}
    
    def cardapio(self, id_usuario, id_empresa):
        """Retorna informações da empresa e produtos do cardápio"""
        sql = """select case when u.id_favorito is null then 'N' else 'S' end as favorito, e.*
        from empresa e
        left join usuario_favorito u on (u.id_empresa = e.id_empresa and u.id_usuario = ?)
        where e.id_empresa = ?"""
        
        empresa = execute(sql, [id_usuario, id_empresa])
        
        sql = """select p.*, c.categoria
        from produto p
        join produto_categoria c on (c.id_empresa = p.id_empresa and c.id_categoria = p.id_categoria)
        where p.id_empresa = ?
        order by c.ordem, p.nome"""
        
        itens = execute(sql, [id_empresa])
        
        retorno = empresa[0]
        retorno["itens"] = itens
        
        return retorno

    def listar_produto_id(self, id_empresa, id_produto, id_usuario=None):
        """Retorna informações de um produto específico"""
        sql = """select *
               from produto 
               where id_empresa = ? and id_produto = ?"""
    
        produto = execute(sql, [id_empresa, id_produto])
    
        if produto and len(produto) > 0:
            return produto[0]
        return None

repository_empresa = RepositoryEmpresa()