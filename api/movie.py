import os
from flask import jsonify,request
from flask_restful import Resource, Api,reqparse
from database.movies import Movie
from database.movies import Cast
from database.actors import Actor
from database.producers import Producer

from schemas.movies import movie_schema
from app import app
import base64

api = Api(app)

class MoviesAPI(Resource):
    '''API for working with Movies'''

    api_url         = '/movies'
    api_endpoint    = 'movies'

    def get(self):
        movie = Movie.query.all()
        movie = movie_schema.dump(movie)
        return jsonify(movie.data)
    
    def post(self):
        producer = {}
        actors = []
        file_val = request.json['file']['file']
        file_val = "/"+file_val
     
        path = os.path.join("/home/bakarali/Projects/DeltaXIM/DeltaXIM-frontend/src/assets",request.json['file']['filename'])        
        fh = open(path, "wb")
        fh.write(file_val.decode('base64'))
        path = "assets/"+request.json['file']['filename']
        request_data = {"file":path,"data":request.json}
        producer_name = request.json['producer']
        producer_obj = Producer.query.filter_by(name = str(producer_name)).first()

        movie_obj = Movie.addmovie(request_data,producer_obj)

        actorslist = request.json['actor']
        for lista in actorslist.split(','):
            actors.append({"name":lista})
        
        for actor in actors:
            actor_obj = Actor.query.filter_by(name = str(actor['name'])).first()
            actor['id'] = actor_obj.id
            Cast.addcast(movie_obj,actor_obj)


    

api.add_resource(MoviesAPI, MoviesAPI.api_url, endpoint = MoviesAPI.api_endpoint)
