from flask import Blueprint, render_template, request

from models.task_model import TaskModel

# 1 - Crie o objeto Blueprint da home_controller, para o registro em app.py
task_controller = Blueprint("task_controller", __name__)


def _get_all_tasks():
    tasks = TaskModel.find()
    return [task.to_dict() for task in tasks]


def _save_task(title):
    if not title:
        return
    task_to_add = TaskModel(
        {
            "title": title,
            "completed": False
        }
    )
    task_to_add.save()


# 2 - Crie o endpoint GET /, que renderiza o template index.html
@task_controller.route("/", methods=["GET", "POST"])
def index():
    task = request.form.get("task-input") if request.method == "POST" else ""
    _save_task(task)
    return render_template("tasks.html", tasks=_get_all_tasks())
