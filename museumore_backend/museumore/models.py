from django.db import models
from django.core.exceptions import ValidationError
 
from django.utils.translation import ugettext as _


class NumberValidator(object):
    def validate(self, password, user=None):
        if not re.findall('\d', password):
            raise ValidationError(
                _("The password must contain at least 1 digit, 0-9."),
                code='password_no_number',
            )

    def get_help_text(self):
        return _(
            "Your password must contain at least 1 digit, 0-9."
        )


class SymbolValidator(object):
    def validate(self, password, user=None):
        if re.findall('[()[\]{}|\\`~!@#$%^&*_\-+=;:\'",<>./?]', password):
            raise ValidationError(
                _("The password should not contain symbols: " +
                  "()[]{}|\`~!@#$%^&*_-+=;:'\",<>./?"),
                code='password_no_symbol',
            )

    def get_help_text(self):
        return _(
            "Your password should not contain symbols: " +
            "()[]{}|\`~!@#$%^&*_-+=;:'\",<>./?"
        )

class Gallary(models.Model):
    username = models.CharField(max_length=50, unique=True)
    password = models.CharField(min_length=8, max_length=20, validators=[SymbolValidator, NumberValidator])
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
    