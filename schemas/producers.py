from marshmallow import fields,validate
from database.producers import Producer
from . import ma

class ProducerSchema(ma.Schema):
    class Meta:
        model = Producer
        fields = ('id','name', 'sex', 'dob','bio','poster')

producer_schema = ProducerSchema(many=True)
