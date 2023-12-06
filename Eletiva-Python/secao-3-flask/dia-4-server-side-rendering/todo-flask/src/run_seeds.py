from models.task_model import TaskModel

tasks = [
    {
        "title": "passear com o cachorro",
        "completed": True
    },
    {
        "title": "comprar pão",
        "completed": True
    },
    {
        "title": "Treinar",
        "completed": True
    }
]

for task in tasks:
    TaskModel(
        {
            "title": task["title"],
            "completed": task["completed"],
        }
    ).save()
