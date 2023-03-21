from django.urls import path, include
from . import views

urlpatterns = [
    path('', views.user_games),
    path('<int:pk>/', views.user_games),
    path('join/<int:pk>/', views.user_games),
    path('all/', views.get_all_games),
    path('post/', views.post_games),
]