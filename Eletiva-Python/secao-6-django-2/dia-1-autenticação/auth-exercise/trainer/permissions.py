# trainers/permissions.py

from rest_framework.permissions import BasePermission


class IsOwner(BasePermission):
    def has_object_permission(self, request, view, obj):
        # Permite acesso se o objeto pertence a quem faz a requisição
        return obj.workout_plan.personal_trainer == request.user
