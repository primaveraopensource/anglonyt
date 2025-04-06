from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "http://client:5173"}})

@app.route("/")
def hello_world():
  return "<h1>Hello, World!</h1>"