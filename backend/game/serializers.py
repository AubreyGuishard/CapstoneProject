from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'type', 'court_type', 'score', 'date', 'time', 'street', 'city', 'state', 'zipcode']
        depth = 1