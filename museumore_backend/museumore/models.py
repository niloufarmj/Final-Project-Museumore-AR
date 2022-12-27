from django.db import models

class Gallary(models.Model):
    username = models.CharField()
    password = models.CharField()
    name = models.CharField()
    email = models.EmailField()
    image = models.ImageField()
    address = models.TextField()
    contact = models.IntegerField()
    description = models.TextField()


class Item(models.Model):
    title = models.CharField()
    description = models.CharField()
    audio = models.FileField(upload_to='audios/')
    video = models.FileField(upload_to='videos/')
    augmented_video = models.FileField()
    gallary_id = models.CharField()