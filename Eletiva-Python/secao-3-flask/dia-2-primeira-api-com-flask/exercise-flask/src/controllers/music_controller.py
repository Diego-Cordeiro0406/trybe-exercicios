# jokes_controller.py
from enum import Enum
from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.music_model import MusicModel

music_controller = Blueprint("musics", __name__)


class Codes(Enum):
    OK = 200
    CREATED = 201
    NOT_FOUND = 404
    NO_CONTENT = 204


def _get_all_musics():
    jokes = MusicModel.find()
    return [joke.to_dict() for joke in jokes]


def _get_music(id: str):
    return MusicModel.find_one({"_id": ObjectId(id)})


@music_controller.route("/", methods=["GET"])
def joke_index():
    music_list = _get_all_musics()
    return jsonify(music_list), Codes.OK.value


@music_controller.route("/random", methods=["GET"])
def music_random():
    music = MusicModel.get_random()
    if music is None:
        return jsonify({"error": "No jokes available"}), Codes.NO_CONTENT.value

    return jsonify(music.to_dict()), Codes.OK.value


@music_controller.route("/", methods=["POST"])
def music_post():
    new_music = MusicModel(request.json)
    new_music.save()
    return jsonify(new_music.to_dict()), Codes.CREATED.value


@music_controller.route("/<id>", methods=["GET"])
def music_show(id: str):
    music = _get_music(id)
    if music is None:
        return jsonify({"error": "Music not found"}), Codes.NOT_FOUND.value
    return jsonify(music.to_dict()), Codes.OK.value


@music_controller.route("/<id>", methods=["DELETE"])
def music_delete(id: str):
    music = _get_music(id)
    if music is None:
        return jsonify({"error": "Music not found"}), Codes.NOT_FOUND.value

    music.delete()
    return jsonify(music.to_dict()), Codes.NO_CONTENT.value
