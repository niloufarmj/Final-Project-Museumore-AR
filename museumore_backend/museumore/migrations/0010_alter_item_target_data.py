# Generated by Django 4.1.4 on 2023-03-01 22:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('museumore', '0009_alter_item_target_data'),
    ]

    operations = [
        migrations.AlterField(
            model_name='item',
            name='target_data',
            field=models.BinaryField(null=True),
        ),
    ]