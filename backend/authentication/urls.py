from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from .views import RegisterView, MyTokenObtainPairView, user_details
from authentication import views

urlpatterns = [
    path('login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('login/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', RegisterView.as_view(), name='register'),
    path('user/<int:pk>/', views.user_details),
    path('user/follow/<int:pk>/', views.close_friends),
    path('user/<int:pk>/', views.get_user_id)
    
]
