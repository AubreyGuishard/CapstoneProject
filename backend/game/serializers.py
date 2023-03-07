from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        game = Game
        fields = ['id', 'game_type', 'court_type', 'game_score', 'date', 'time', 'street', 'city', 'state', 'zipcode']
        depth = 1