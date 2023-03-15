from django.db import models
from authentication.models import User
# Create your models here.

class Game(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    type = models.CharField(max_length=255)
    court_type = models.CharField(max_length=255)
    score = models.IntegerField()
    date = models.DateField(auto_now_add=True)
    time = models.TimeField()
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.IntegerField()
    attendees = models.ManyToManyField(User, related_name='attendees', blank=True)