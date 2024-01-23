from rest_framework import viewsets
from .models import Client, Personal
from .serializers import ClientSerializer, PersonalSerializer
from .permissions import IsOwner


class PersonalViewSet(viewsets.ModelViewSet):
    queryset = Personal.objects.all()
    serializer_class = PersonalSerializer


class ClientViewSet(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    permission_classes = [IsOwner]
