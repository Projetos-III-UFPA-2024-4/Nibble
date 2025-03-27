from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
import logging

app = Flask(__name__)
CORS(app)  # Habilitar CORS para todas as rotas

# Configuração do banco de dados
db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'NICOranni2904',
    'database': 'app_refood'
}

# Lista de categorias e subcategorias
categorias = ['laticinios', 'congelados', 'enlatados', 'bebidas', 'massas', 'doces', 'graos', 'molhos']
subcategorias = ['vegano', 'sem_gluten', 'rico_calorias', 'organico']

# Configuração de logging
logging.basicConfig(level=logging.DEBUG)

@app.route('/produtos/categoria/<categoria>', methods=['GET'])
def buscar_produtos_por_categoria(categoria):
    try:
        if categoria not in categorias:
            return jsonify({"erro": "Categoria inválida"}), 400

        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)
        cursor.execute("SELECT * FROM produtos WHERE categoria = %s", (categoria,))
        produtos = cursor.fetchall()
        cursor.close()
        conn.close()
        return jsonify(produtos)
    except mysql.connector.Error as err:
        logging.error(f"Erro no banco de dados: {err}")
        return jsonify({"erro": str(err)}), 500
    except Exception as e:
        logging.error(f"Erro inesperado: {e}")
        return jsonify({"erro": "Erro interno no servidor"}), 500

@app.route('/recomendacoes/<int:usuario_id>', methods=['GET'])
def recomendacoes(usuario_id):
    try:
        conn = mysql.connector.connect(**db_config)
        cursor = conn.cursor(dictionary=True)

        # Consultar histórico do usuário
        cursor.execute("""
            SELECT categoria, SUM(quantidade) AS total_comprado
            FROM historico_usuario
            WHERE usuario_id = %s
            GROUP BY categoria
        """, (usuario_id,))
        historico = cursor.fetchall()

        if not historico:
            return jsonify({"erro": "Histórico do usuário vazio"}), 404

        # Converter histórico para vetor
        historico_usuario = np.zeros(len(categorias) + len(subcategorias))
        for item in historico:
            if item['categoria'] in categorias:
                index = categorias.index(item['categoria'])
                historico_usuario[index] = item['total_comprado']

        # Consultar todos os produtos com subcategorias
        cursor.execute("SELECT id, nome, categoria, vegano, sem_gluten, rico_calorias, organico FROM produtos")
        produtos = cursor.fetchall()

        if not produtos:
            return jsonify({"erro": "Nenhum produto disponível"}), 404

        # Calcular similaridade para cada produto
        recomendacoes = []
        for produto in produtos:
            vetor_produto = np.zeros(len(categorias) + len(subcategorias))

            if produto['categoria'] in categorias:
                index = categorias.index(produto['categoria'])
                vetor_produto[index] = 1 
# [id, nome, categoria, vegano, sem_gluten, rico_calorias, organico]
            if produto['vegano']:
                index = len(categorias) + subcategorias.index('vegano')
                vetor_produto[index] = 1
            if produto['sem_gluten']:
                index = len(categorias) + subcategorias.index('sem_gluten')
                vetor_produto[index] = 1
            if produto['rico_calorias']:
                index = len(categorias) + subcategorias.index('rico_calorias')
                vetor_produto[index] = 1
            if produto['organico']:
                index = len(categorias) + subcategorias.index('organico')
                vetor_produto[index] = 1

            similaridade = cosine_similarity([historico_usuario], [vetor_produto])[0][0]
            recomendacoes.append({
                'id': produto['id'],
                'nome': produto['nome'],
                'categoria': produto['categoria'],
                'similaridade': float(similaridade)
            })

        # Ordenar e limitar recomendações
        recomendacoes.sort(key=lambda x: x['similaridade'], reverse=True)
        recomendacoes = recomendacoes[:5]

        return jsonify(recomendacoes)
    except mysql.connector.Error as err:
        logging.error(f"Erro no banco de dados: {err}")
        return jsonify({"erro": str(err)}), 500
    except Exception as e:
        logging.error(f"Erro inesperado: {e}")
        return jsonify({"erro": "Erro interno no servidor"}), 500
    finally:
        cursor.close()
        conn.close()

if __name__ == '__main__':
    app.run(debug=True)