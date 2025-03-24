from database.sqlite_connection import execute

class RepositoryUsuario:
    def favoritos(self, id_usuario):
        sql = """
        SELECT f.*, e.icone, e.nome, e.endereco, e.numero, e.bairro, e.cidade, e.uf
        FROM usuario_favorito f
        JOIN empresa e ON (e.id_empresa = f.id_empresa)
        WHERE f.id_usuario = ?
        """
        favoritos = execute(sql, [id_usuario])
        return favoritos

    def inserir(self, nome, email, senha, endereco, numero, bairro, cidade, uf, cep):
        """
        Insere um novo usuário na tabela usuario e retorna o ID gerado.
        """
        # Primeiro, fazemos o INSERT propriamente dito (sem RETURNING, pois o SQLite nativo não aceita por padrão).
        sql_insert = """
        INSERT INTO usuario (
            nome, email, senha,
            endereco, numero, bairro,
            cidade, uf, cep, dt_cadastro
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, CURRENT_TIMESTAMP)
        """
        execute(sql_insert, [nome, email, senha, endereco, numero, bairro, cidade, uf, cep])

        # Depois, obtemos o ID do último registro inserido usando a função nativa do SQLite.
        sql_last_id = "SELECT last_insert_rowid() AS id_usuario"
        rows = execute(sql_last_id)
        if rows:
            return rows[0]
        return None
    
    def listar_by_email(self, email):
        """
        Retorna os dados de um usuário com base no e-mail.
        Se não encontrar, retorna None.
        """
        sql = """
        SELECT id_usuario, senha, nome, email, endereco,
               numero, bairro, cidade, uf, cep, dt_cadastro
        FROM usuario
        WHERE email = ?
        """
        rows = execute(sql, [email])
        return rows[0] if rows else None

    def listar_by_id(self, id_usuario):
        """
        Retorna os dados de um usuário com base no ID.
        Se não encontrar, retorna None.
        """
        sql = """
        SELECT id_usuario, nome, email, endereco,
               numero, bairro, cidade, uf, cep, dt_cadastro
        FROM usuario
        WHERE id_usuario = ?
        """
        rows = execute(sql, [id_usuario])
        return rows[0] if rows else None

repository_usuario = RepositoryUsuario()