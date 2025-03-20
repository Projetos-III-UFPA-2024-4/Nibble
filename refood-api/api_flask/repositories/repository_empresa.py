from database.sqlite_connection import execute

class RepositoryEmpresa:
    def listar(self):
        """Retorna todas as empresas"""
        sql = "SELECT * FROM empresa"
        empresas = execute(sql)
        return empresas
        
    def destaques(self):
        """Retorna empresas em destaque"""
        sql = "SELECT * FROM destaque"
        empresas = execute(sql)
        return empresas

repository_empresa = RepositoryEmpresa()