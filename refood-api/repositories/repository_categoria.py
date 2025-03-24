from database.sqlite_connection import execute

class RepositoryCategoria:
    def listar(self):
        """Retorna todas as categorias ordenadas por ordem"""
        sql = "SELECT * FROM categoria ORDER BY ordem"
        categorias = execute(sql)
        return categorias

repository_categoria = RepositoryCategoria()