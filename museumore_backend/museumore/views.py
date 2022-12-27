from django.shortcuts import render
from rest_framework import viewsets
from .serializers import GallarySerializer
from .models import Gallary

# Create your views here.

class GallaryView(viewsets.ModelViewSet):
    serializer_class = GallarySerializer
    queryset = Gallary.objects.all()
    
