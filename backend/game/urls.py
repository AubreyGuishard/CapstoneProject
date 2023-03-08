from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.user_games),
    path('all/', views.get_all_games)
]