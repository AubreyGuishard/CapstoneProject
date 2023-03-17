# from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Game
from .models import User
from .serializers import GameSerializer
# Create your views here.


@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_games(request):
    games = Game.objects.all()
    serializer = GameSerializer(games, many=True)
    return Response(serializer.data)

@api_view(['POST'])
@permission_classes({IsAuthenticated})
def post_games(request):
  if request.method == 'POST':
    serializer = GameSerializer(data=request.data)
    if  serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE', 'PATCH'])
@permission_classes([IsAuthenticated])
def user_games(request, pk):
    game = get_object_or_404(Game, pk=pk)
    if request.method == 'PUT':
        serializer = GameSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        serializer = GameSerializer(game)
        return Response(serializer.data)
    elif request.method == 'DELETE':
        game.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    elif request.method == 'PATCH':
        user = get_object_or_404(User, id=request.user.id)
        if game.attendees.contains(user):
            game.attendees.remove(user)
        else:
            game.attendees.add(user)
        serializer = GameSerializer(game)
        return Response(serializer.data, status=status.HTTP_201_CREATED)        
        
