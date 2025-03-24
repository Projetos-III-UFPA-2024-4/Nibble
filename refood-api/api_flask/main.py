from flask import Flask
from flask_cors import CORS
import routes

app = Flask(__name__)
app.config['JSON_SORT_KEYS'] = False
CORS(app)  # Habilita CORS para todas as rotas

# Registra as rotas da aplicação
routes.init_app(app)

if __name__ == '__main__':
    app.run(debug=True, port=3001)