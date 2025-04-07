from flask import Flask
from flask_cors import CORS
from dotenv import load_dotenv
import os

load_dotenv()

def create_app():
    app = Flask(__name__)
    CORS(app)
    
    # Configuración
    app.config.from_mapping(
        GEMINI_API_KEY=os.getenv('GEMINI_API_KEY'),
        FLASK_SECRET_KEY=os.getenv('FLASK_SECRET_KEY', 'dev')
    )
    
    # Registrar blueprints
    from routes import bp
    app.register_blueprint(bp)
    
    return app