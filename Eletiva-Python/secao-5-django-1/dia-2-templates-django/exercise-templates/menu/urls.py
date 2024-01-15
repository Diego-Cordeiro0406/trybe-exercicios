from django.urls import path
from menu.views import home, recipe_details, delete_recipe


urlpatterns = [
    path("", home, name="home-page"),
    path("recipe/<int:recipe_id>", recipe_details, name="details-page"),
    path("recipe/<int:recipe_id>/delete", delete_recipe, name="delete-page")
]
