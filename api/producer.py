from flask import jsonify,request
from flask_restful import Resource, Api,reqparse
from database.producers import Producer
from schemas.producers import producer_schema
from app import app
import os
api = Api(app)

class ProducersAPI(Resource):
    '''API for working with Producwe'''

    api_url         = '/producers'
    api_endpoint    = 'producers'

    def get(self):
        producer = Producer.query.all()
        producer = producer_schema.dump(producer)
        return jsonify(producer.data)



    def post(self):
        file_val = request.json['file']['file']
        file_val = "/"+file_val
        
        path = os.path.join("/home/bakarali/Projects/DeltaXIM/DeltaXIM-frontend/src/assets",request.json['file']['filename'])        
        fh = open(path, "wb")
        fh.write(file_val.decode('base64'))
        path = "assets/"+request.json['file']['filename']
        request_data = {"file":path,"data":request.json}
        Producer.addProducer(request_data)

api.add_resource(ProducersAPI, ProducersAPI.api_url, endpoint = ProducersAPI.api_endpoint)
