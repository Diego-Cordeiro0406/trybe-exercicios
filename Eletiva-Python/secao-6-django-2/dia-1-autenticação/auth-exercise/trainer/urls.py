from rest_framework import routers
from django.urls import path, include
from trainer.views import ClientViewSet, PersonalViewSet

router = routers.DefaultRouter()
router.register(r'clients', ClientViewSet)
router.register(r'personals', PersonalViewSet)

urlpatterns = [
    path('', include(router.urls))
]
