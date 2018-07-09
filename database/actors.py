from . import db
from datetime import datetime
class Actor(db.Model):
    __tablename__   = 'actor'
    id            = db.Column(db.Integer,  primary_key=True, index=True)
    name          = db.Column(db.String ,  nullable=False,   index=True)
    sex           = db.Column(db.String ,  nullable=False,   index=True)
    dob           = db.Column(db.DateTime, nullable=False,   index=True)
    bio           = db.Column(db.String ,  nullable=False,   index=True)
    poster        = db.Column(db.String ,  nullable=True,   index=True)

    @staticmethod
    def addActor(request_data):
        data = request_data['data']
        file_val = request_data['file']
        dob = data['dob']
        dob = dob.replace("-","")
        format_str = '%Y%m%d'
        dob = dob = datetime.strptime(dob, format_str)
        actor = Actor(name=data['name'], sex=data['sex'], dob=dob,bio=data['bio'],poster=file_val)
        db.session.add(actor)
        db.session.commit()
