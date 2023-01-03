from rest_framework import serializers
from .models import *

class GallarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Gallary
        fields = ('id', 'username', 'password', 'name', 'email', 'image', 'address', 'contact', 'description')

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'gallary', 'title', 'description', 'audio', 'augmented_video', 'extra_video')
