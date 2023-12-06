from flask import Flask
from controllers.movie_controller import movies_controller

app = Flask(__name__)
app.static_folder = "views/static"
app.template_folder = "views/templates"

app.register_blueprint(movies_controller, url_prefix="/")
# class Book:
#     def __init__(self, title, author, year) -> None:
#         self.title = title
#         self.author = author
#         self.year = year


# book = Book("mitologia nordica", "Neil Gaiman", 2015)


# @app.route("/")
# def index():
#     return render_template("index.html", greetings="Boas Vindas")


# @app.route("/books")
# def books():
#     return render_template(
#         "book.html",
#         title=book.title,
#         author=book.author,
#         year=book.year
#       )


if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0', port=8000)
