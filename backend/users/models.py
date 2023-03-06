from django.db import models
from authentication.models import User
# Create your models here.

class User(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    userName = models.CharField(max_length=30)
    password = models.CharField(max_length=30)
    firstName = models.CharField(max_length=35)
    lastName = models.CharField(max_length=35)
    street = models.IntegerField()
    city = models.CharField(max_length=255)
    state = models.CharField(max_length=255)
    zipcode = models.IntegerField()
    email = models.CharField(max_length=255)
    isActive = models.BooleanField()