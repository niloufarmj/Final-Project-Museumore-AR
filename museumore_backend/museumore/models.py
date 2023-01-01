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
    image = models.ImageField(null=True)
    address = models.TextField(null=True)
    contact = models.IntegerField(null=True)
    description = models.TextField(null=True)


class Item(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    audio = models.FileField(upload_to='audios/')
    augmented_video = models.FileField(upload_to='augmented_videos/')
    extra_video = models.FileField(upload_to='extra_videos/')
    