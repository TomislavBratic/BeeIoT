# Generated by Django 3.0.7 on 2020-07-21 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hive', '0006_hive_url_name'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='hive',
            name='url_name',
        ),
        migrations.AddField(
            model_name='hive',
            name='slug',
            field=models.CharField(default='test', help_text="Short human and URL-friendly name used for the hive's URL", max_length=1024, unique=True),
            preserve_default=False,
        ),
        migrations.AlterField(
            model_name='hive',
            name='active',
            field=models.BooleanField(help_text='Determines if this hive should be accessible publicly'),
        ),
        migrations.AlterField(
            model_name='hive',
            name='stream_active',
            field=models.BooleanField(help_text="Determines if this hive's stream should be accessible publicly"),
        ),
    ]