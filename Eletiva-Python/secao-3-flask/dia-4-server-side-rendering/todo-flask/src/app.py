from flask import Flask
from controllers.task_controller import task_controller

app = Flask(__name__)  # Cria a instância da aplicação
app.template_folder = "views/templates"

app.register_blueprint(task_controller, url_prefix="/")


if __name__ == "__main__":
    # debug = True, reinicia automaticamente a cada mudança de arquivo
    # mude a porta, caso ela estiver em uso
    app.run(debug=True, host="0.0.0.0", port=8000)
