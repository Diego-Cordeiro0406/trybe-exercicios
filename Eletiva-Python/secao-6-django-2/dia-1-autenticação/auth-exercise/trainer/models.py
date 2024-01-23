from django.db import models


class Client(models.Model):
    name = models.CharField(max_length=50)
    address = models.CharField(max_length=200)
    create_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name


class Personal(models.Model):
    name = models.CharField(max_length=50)

    def __str__(self):
        return self.name


class WorkoutPlan(models.Model):
    client = models.OneToOneField(
        Client,
        on_delete=models.CASCADE,
        related_name="workout"
      )
    personal_trainer = models.ManyToManyField(
        Personal,
        related_name="workouts"
      )
    workout = models.TextField()

    def __str__(self):
        return f"{self.client.name}'s workout"
