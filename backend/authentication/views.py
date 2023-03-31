from django.contrib.auth import get_user_model
from .serializers import MyTokenObtainPairSerializer, RegistrationSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view, permission_classes
from .models import User
from .serializers import UserSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework import status
# User = get_user_model()


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer

@api_view(['GET', 'PUT'])
@permission_classes([IsAuthenticated])
def user_details(request, pk):
    user = get_object_or_404(User, pk=pk)
    if request.method == 'GET':  
        serializer = RegistrationSerializer(user)
        return Response(serializer.data)
    elif request.method == 'PUT':
        user.friends.clear()
        user.friends.add(*request.data['friends'])
        serializer = RegistrationSerializer(user, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
    
@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def close_friends(request, pk):
    if request.method == 'PATCH':
        user = get_object_or_404(User, id=request.user.id)
        friend = get_object_or_404(User, id=pk)
        if user.friends.contains(friend):
            user.friends.remove(friend)
        else:
            user.friends.add(friend)
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_201_CREATED) 
        
@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_user_id(request, pk):
    user = get_object_or_404(User, pk=pk)
    serializer = UserSerializer(user)
    return Response(serializer.data)
