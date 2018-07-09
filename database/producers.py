from . import db
from datetime import datetime
class Producer(db.Model):
    __tablename__ = 'producer'
    
    id            = db.Column(db.Integer,  primary_key=True, index=True)
    name          = db.Column(db.String ,  nullable=False,   index=True)
    sex           = db.Column(db.String ,  nullable=False,   index=True)
    dob           = db.Column(db.DateTime, nullable=False,   index=True)
    bio           = db.Column(db.String ,  nullable=False,   index=True)
    poster        = db.Column(db.String ,  nullable=True,   index=True)

    @staticmethod
    def addProducer(request_data):
        data = request_data['data']
        file_val = request_data['file']
        dob = data['dob']
        dob = dob.replace("-","")
        format_str = '%Y%m%d'
        dob = dob = datetime.strptime(dob, format_str)
        producer = Producer(name=data['name'], sex=data['sex'], dob=dob,bio=data['bio'],poster=file_val)
        db.session.add(producer)
        db.session.commit()
