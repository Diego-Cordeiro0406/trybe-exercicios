from flask import Blueprint, render_template
from models.movie_model import MovieModel


movies_controller = Blueprint("movies_controller", __name__)


def _get_all_jokes():
    movies = MovieModel.find()
    return [movie.to_dict() for movie in movies]


@movies_controller.route("/")
def movies():
    return render_template("movie.html", movies=_get_all_jokes())
