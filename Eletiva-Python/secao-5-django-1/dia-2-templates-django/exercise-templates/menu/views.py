from django.shortcuts import get_object_or_404, render
from django.http import Http404

from menu.models import Recipe


def home(request):
    context = {"recipes": Recipe.objects.all()}
    return render(request, "home.html", context)


def recipe_details(request, recipe_id):
    recipe = get_object_or_404(Recipe, id=recipe_id)
    return render(request, 'details.html', {'recipe': recipe})


def delete_recipe(request, recipe_id):
    try:
        Recipe.objects.get(id=recipe_id).delete()
        return render(request, "deleted.html")
    except Http404:
        return render(request, "404.html")
