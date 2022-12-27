from django.urls import path
from .views import add_gallary

urlpatterns = [
    path('add_gallary/', add_gallary),
]
