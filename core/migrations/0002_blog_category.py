# Generated by Django 5.1.7 on 2025-03-30 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='category',
            field=models.CharField(default='general', max_length=50),
        ),
    ]
