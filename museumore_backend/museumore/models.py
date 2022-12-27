from django.db import models

class Gallary(models.Model):
    username = models.CharField(max_length=50)
    password = models.CharField(max_length=20)
    name = models.CharField(max_length=50)
    email = models.EmailField()
    image = models.ImageField()
    address = models.TextField()
    contact = models.IntegerField()
    description = models.TextField()


class Item(models.Model):
    title = models.CharField(max_length=50)
    description = models.TextField()
    audio = models.FileField(upload_to='audios/')
    video = models.FileField(upload_to='videos/')
    augmented_video = models.FileField()
    gallary_id = models.IntegerField()