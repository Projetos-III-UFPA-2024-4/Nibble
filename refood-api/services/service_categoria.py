from repositories.repository_categoria import repository_categoria

class ServiceCategoria:
    def listar(self):
        """Retorna todas as categorias"""
        categorias = repository_categoria.listar()
        return categorias

service_categoria = ServiceCategoria()