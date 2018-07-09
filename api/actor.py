from flask import jsonify,request
from flask_restful import Resource, Api,reqparse
from database.actors import Actor
from schemas.actors import actor_schema
from app import app
import os
api = Api(app)

class ActorsAPI(Resource):
    '''API for working with Actors'''

    api_url         = '/actors'
    api_endpoint    = 'actors'

    def get(self):
        movie = Actor.query.all()
        movie = actor_schema.dump(movie)
        return jsonify(movie.data)

    def post(self):
        file_val = request.json['file']['file']
        file_val = "/"+file_val
        
        path = os.path.join("/home/bakarali/Projects/DeltaXIM/DeltaXIM-frontend/src/assets",request.json['file']['filename'])        
        fh = open(path, "wb")
        fh.write(file_val.decode('base64'))
        path = "assets/"+request.json['file']['filename']
        request_data = {"file":path,"data":request.json}
        Actor.addActor(request_data)

api.add_resource(ActorsAPI, ActorsAPI.api_url, endpoint = ActorsAPI.api_endpoint)
    