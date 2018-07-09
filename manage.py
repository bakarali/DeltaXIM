from flask_script import Manager,Server
from flask_migrate import Migrate, MigrateCommand
from flask_migrate import upgrade
from database import db
from app import app
from api import actor,movie,producer

MIGRATE = Migrate(app, db)
MANAGER = Manager(app)

MANAGER.add_command("runserver", Server(host="0.0.0.0", port="9000"))
MANAGER.add_command("db", MigrateCommand)



if __name__=="__main__":
    MANAGER.run()
