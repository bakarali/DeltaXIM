from marshmallow import fields,validate
from database.movies import Movie
from . import ma

class MovieSchema(ma.Schema):
    class Meta:
        model = Movie
        fields = ('id','name', 'year_of_release', 'plot','poster','producer_id')


movie_schema = MovieSchema(many=True)
