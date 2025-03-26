import sqlite3
import os

DB_PATH = 'C:/Users/Administrator/Desktop/Nibble/refood-api/database/banco.db'

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

    conn = None
    try:
        # Cria a conexão com o banco de dados
        conn = sqlite3.connect(DB_PATH)
        
        # Permite acessar colunas pelo nome
        conn.row_factory = sqlite3.Row
        
        # Cria um cursor para executar comandos SQL
        cursor = conn.cursor()
        
        # Executa a query com os parâmetros
        cursor.execute(query, params)
        
        # Verifica se a query contém RETURNING ou é um SELECT
        if query.strip().upper().startswith('SELECT') or 'RETURNING' in query.strip().upper():
            rows = cursor.fetchall()
            result = [dict(row) for row in rows]
        else:
            # Se for INSERT, UPDATE ou DELETE (sem RETURNING), faz o commit e retorna o número de linhas afetadas
            result = {"affected_rows": cursor.rowcount}
        
        # Commit para todas as operações    
        conn.commit()
            
        return result
    
    except sqlite3.Error as e:
        print(f"Erro no SQLite: {str(e)}")
        # Tenta fazer rollback se houver erro
        if conn:
            try:
                conn.rollback()
            except:
                pass
        raise e
    
    except Exception as e:
        print(f"Erro inesperado: {str(e)}")
        # Tenta fazer rollback se houver erro
        if conn:
            try:
                conn.rollback()
            except:
                pass
        raise e
    
    finally:
        # Garante que a conexão seja fechada
        if conn:
            try:
                cursor.close()
                conn.close()
            except:
                pass