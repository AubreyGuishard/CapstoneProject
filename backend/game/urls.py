from django.urls import path, include
from game import views

urlpattern = [
    path('all/', views.get_all_games)
]