from django.db import models


class Tasks(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    due_date = models.DateTimeField()
    completed = models.BooleanField()
    priority = models.IntegerField(
        choices=[(1, "Baixa"), (2, "Média"), (3, "Alta")],
        default=1
    )
    created_at = models.DateTimeField(auto_now_add=True)
