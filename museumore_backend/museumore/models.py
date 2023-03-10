from django.db import models
from django.core.exceptions import ValidationError
from django.core.validators import MinLengthValidator

def contains_number(string):
    return any(char.isdigit() for char in string)

def numberValidator(password):
    if not contains_number(password):
            raise ValidationError("Your password must contain at least 1 digit")

class Gallary(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=20, validators=[numberValidator, MinLengthValidator(8)])
    name = models.CharField(max_length=50)
    email = models.EmailField(unique=True)
    image = models.ImageField(null=True, upload_to='gallary_profile/')
    address = models.TextField(blank=True, default="")
    contact = models.TextField(blank=True, default="")
    description = models.TextField(blank=True, default="")

class Item(models.Model):
    # gallary = models.ForeignKey(Gallary, on_delete=models.CASCADE, related_name='items', default=1)
    gallary_id = models.IntegerField(default=0)
    target_index = models.IntegerField(default=0)
    target_image = models.ImageField(upload_to='target_images/', null=True)
    target_data = models.JSONField(null=True)
    title = models.TextField()
    description = models.TextField(blank=True)
    audio = models.FileField(upload_to='audios/', null=True)
    audio_name = models.TextField(blank=True)
    augmented_video = models.FileField(upload_to='augmented_images_or_videos/', null=True)
    extra_video = models.FileField(upload_to='extra_videos/', null=True)

class TargetFile(models.Model):
    file = models.FileField(upload_to='target_file/', null=True)