from flask import Flask
from flask.ext.cors import CORS

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///database/sqlitedatabase.db'
cors = CORS(app, resources={r"/*": {"origins": "*"}})
