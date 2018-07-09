import os
from . import db
from database.actors import Actor
from database.producers import Producer

class Movie(db.Model):
    __tablename__   = 'movie'

    id                  = db.Column(db.Integer,  primary_key=True, index=True)
    name                = db.Column(db.String ,  nullable=False,   index=True)
    year_of_release     = db.Column(db.String ,  nullable=False,   index=True)
    plot                = db.Column(db.String ,  nullable=False,   index=True)
    poster              = db.Column(db.LargeBinary ,  nullable=False,   index=True)
    producer_id         = db.Column(db.Integer,      db.ForeignKey('producer.id'))

    @staticmethod
    def addmovie(request_data,producer_obj):
        data = request_data['data']
        file_val = request_data['file']
        movie = Movie(name=data['name'], year_of_release=data['year_of_release'], plot=data['plot'],poster=file_val,producer_id=producer_obj.id)
        db.session.add(movie)
        db.session.commit()
        return movie
 

class Cast(db.Model):
    __tablename__ = 'cast'

    id           = db.Column(db.Integer,  primary_key=True, index=True)
    movie_id     = db.Column(db.Integer,      db.ForeignKey('movie.id'))
    actor_id     = db.Column(db.Integer,      db.ForeignKey('actor.id'))
    
    @staticmethod
    def addcast(movie_obj,actor_obj):
        cast = Cast(movie_id=movie_obj.id,actor_id=actor_obj.id)
        db.session.add(cast)
        db.session.commit()