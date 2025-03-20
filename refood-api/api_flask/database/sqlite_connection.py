import sqlite3
import os

DB_PATH = 'c:/Users/Administrator/Desktop/Nibble/refood-api/api_flask/database/banco.db'

def execute(query, params=None):
    """
    Executa uma query SQL no banco de dados SQLite.
    
    Args:
        query (str): Query SQL a ser executada
        params (list): Parâmetros para a query (opcional)
        
    Returns:
        list: Resultado da consulta como uma lista de dicionários
    """

    print(f"Tentando executar query: {query}")
    print(f"Caminho do banco: {DB_PATH}")
    print(f"O arquivo existe? {os.path.exists(DB_PATH)}")
    

    if params is None:
        params = []

    try:
        # Cria a conexão com o banco de dados
        conn = sqlite3.connect(DB_PATH)
        
        # Permite acessar colunas pelo nome
        conn.row_factory = sqlite3.Row
        
        # Cria um cursor para executar comandos SQL
        cursor = conn.cursor()
        
        # Executa a query com os parâmetros
        cursor.execute(query, params)
        
        # Se for SELECT, retorna os resultados como dicionários
        if query.strip().upper().startswith('SELECT'):
            rows = cursor.fetchall()
            result = [dict(row) for row in rows]
        else:
            # Se for INSERT, UPDATE ou DELETE, faz o commit e retorna o número de linhas afetadas
            conn.commit()
            result = {"affected_rows": cursor.rowcount}
            
        # Fecha o cursor e a conexão
        cursor.close()
        conn.close()
        
        return result
    
    except sqlite3.Error as e:
        print(f"Erro no SQLite: {str(e)}")
        raise e
    
    except Exception as e:
        print(f"Erro inesperado: {str(e)}")
        raise e