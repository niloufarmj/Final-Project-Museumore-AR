from rest_framework import serializers
from .models import *

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        # fields = ('id', 'gallary', 'target_image','title', 'description', 'audio', 'augmented_video', 'extra_video')
        fields = ('id', 'gallary_id','target_index', 'target_image','title', 'description', 'audio', 'augmented_video', 'extra_video')

class GallarySerializer(serializers.ModelSerializer):
    # items = ItemSerializer(many=True)
    class Meta:
        model = Gallary
        # fields = ('id', 'username', 'password', 'name', 'email', 'image', 'address', 'contact', 'description', 'items')
        fields = ('id', 'username', 'password', 'name', 'email', 'image', 'address', 'contact', 'description')

    # def create(self, validated_data):
    #     items_data = validated_data.pop('items')
    #     gallary = Gallary.objects.create(**validated_data)
    #     for item_data in items_data:
    #         Item.objects.create(gallary=gallary, **item_data)
    #     return gallary

    # def update(self, instance, validated_data):
    #     items_data = validated_data.pop('items')
    #     items = (instance.items).all()
    #     items = list(items)
    #     instance.username = validated_data.get('username', instance.username)
    #     instance.password = validated_data.get('password', instance.password)
    #     instance.name = validated_data.get('name', instance.name)
    #     instance.email = validated_data.get('email', instance.email)
    #     instance.image = validated_data.get('image', instance.image)
    #     instance.address = validated_data.get('address', instance.address)
    #     instance.contact = validated_data.get('contact', instance.contact)
    #     instance.description = validated_data.get('description', instance.description)
    #     instance.save()

    #     for item_data in items_data:
    #         item = items.pop(0)
    #         item.title = item_data.get('title', item.title)
    #         item.description = item_data.get('description', item.description)
    #         item.audio = item_data.get('audio', item.audio)
    #         item.augmented_video = item_data.get('augmented_video', item.augmented_video)
    #         item.extra_video = item_data.get('extra_video', item.extra_video)
    #         item.save()
    #     return instance