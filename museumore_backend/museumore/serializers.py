from rest_framework import serializers
from .models import Gallary

class GallarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallary
        fields = ('id', 'username', 'password', 'name', 'email', 'image', 'address', 'contact', 'description')