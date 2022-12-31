from django.db import models

class Gallary(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(max_length=20)
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
    