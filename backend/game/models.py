from django.db import models
from authentication.models import User
# Create your models here.

class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    game_type = models.CharField(max_length=255)
    court_type = models.CharField(max_length=255)
    game_score = models.IntegerField()
    game_date = models.DateField()
    game_time = models.TimeField()
    game_street = models.CharField(max_length=255)
    game_city = models.CharField(max_length=255)
    game_state = models.CharField(max_length=255)
    game_zipcode = models.IntegerField()