from marshmallow import fields,validate
from database.actors import Actor
from . import ma

class ActorSchema(ma.Schema):
    class Meta:
        model = Actor
        fields = ('id','name', 'sex', 'dob','bio','poster')

actor_schema = ActorSchema(many=True)
