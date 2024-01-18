from django.urls import path
from playlists.views import music, singer, index


urlpatterns = [
    path("musics/", music, name="musics-page"),
    path("singers/", singer, name="singer-page"),
    path("", index, name="home-page"),
]
