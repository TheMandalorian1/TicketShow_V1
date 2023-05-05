from flask import Flask
from applications.models import db
from os import path

app = None

def make_app():
  app = Flask(__name__, template_folder="templates")
  cd= path.abspath(path.dirname('applications'))
  print(cd)

  app.config['SQLALCHEMY_DATABASE_URI'] = "sqlite:///"+path.join(cd,"ticketshow.sqlite3")
  #app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///ticketshow.sqlite3'
  app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
  app.secret_key = "abc"
  app.config['UPLOAD_FOLDER'] = 'static\Posters'

  db.init_app(app)
  app.app_context().push()
  return app

app = make_app()

# Import all the controllers so they are loaded
from applications.app import *

if __name__ == '__main__':
  # Run the Flask app
  db.create_all()
  app.run(debug=True)