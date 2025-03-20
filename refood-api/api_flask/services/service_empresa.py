from repositories.repository_empresa import repository_empresa

class ServiceEmpresa:
    def destaques(self):
        """Retorna todas as empresas em destaque"""
        empresas = repository_empresa.destaques()
        return empresas

service_empresa = ServiceEmpresa()