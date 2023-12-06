from models.db import db
from models.abstract_model import AbstractModel


class TaskModel(AbstractModel):
    _collection = db["jokes"]

    # Nosso construtor receberá um dicionário (JSON)
    # para instanciar um objeto
    def __init__(self, json_data):
        super().__init__(json_data)

    def to_dict(self):
        return {
            "_id": str(self.data["_id"]),
            "title": self.data["title"],
            "completed": self.data["completed"],
        }
