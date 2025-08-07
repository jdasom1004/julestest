from django.urls import path
from .views import NewsFeedAPIView

urlpatterns = [
    path('news/', NewsFeedAPIView.as_view(), name='news-feed'),
]
