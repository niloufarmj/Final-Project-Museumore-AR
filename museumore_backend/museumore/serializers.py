from rest_framework import serializers
from .models import *

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = ('id', 'gallary_id','target_index', 'target_image', 'target_data', 'title', 'description', 'audio', 'audio_name', 'augmented_video', 'extra_video')

class GallarySerializer(serializers.ModelSerializer):
    # items = ItemSerializer(many=True)
    class Meta:
        model = Gallary
        fields = ('id', 'username', 'password', 'name', 'email', 'image', 'address', 'contact', 'description')

class TargetFileSerializer(serializers.ModelSerializer):
    class Meta:
        model = TargetFile
        fields = ('id', 'file')

 