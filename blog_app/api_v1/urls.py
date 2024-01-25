from django.urls import path, include
from rest_framework.routers import DefaultRouter

from blog_app.api_v1.auth.views.login import LoginView
from blog_app.api_v1.users.views import UserCreateAPIView, UserRetrieveUpdateDestroyAPIView

app_name = 'api_v1'

router = DefaultRouter(trailing_slash=True)

urlpatterns = [
    path('auth/login', LoginView.as_view(), name='user-views'),
    path('auth/register', UserCreateAPIView.as_view(), name='user-register'),
    path('user', UserRetrieveUpdateDestroyAPIView.as_view(), name='user-rud'),

    path("", include(router.urls))
]
