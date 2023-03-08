from rest_framework import serializers
from .models import Game

class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['id', 'game_type', 'court_type', 'game_score', 'game_date', 'game_time', 'game_street', 'game_city', 'game_state', 'game_zipcode']
        depth = 1