from rest_framework import serializers
from .models import Car

# <<<<<<<<<<<<<<<<< EXAMPLE FOR STARTER CODE USE <<<<<<<<<<<<<<<<<


class CarSerializer(serializers.ModelSerializer):
   
    class Meta:
        model = Car
        user = serializers.ReadOnlyField()
        fields = ['id', 'make', 'model', 'year', 'user_id', 'user']
        depth = 1
