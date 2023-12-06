from .db import db
from .abstract_model import AbstractModel


class MovieModel(AbstractModel):
    _collection = db["movies"]

    def __init__(self, json_data):
        super().__init__(json_data)

    def to_dict(self):
        return {
            "_id": str(self.data["_id"]),
            "title": self.data["title"],
            "year": self.data["year"],
            "poster": self.data["poster"]
        }
