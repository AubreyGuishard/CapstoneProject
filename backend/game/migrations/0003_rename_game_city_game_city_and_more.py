# Generated by Django 4.1.7 on 2023-03-09 19:55

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('game', '0002_alter_game_game_date'),
    ]

    operations = [
        migrations.RenameField(
            model_name='game',
            old_name='game_city',
            new_name='city',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_date',
            new_name='date',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_score',
            new_name='score',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_state',
            new_name='state',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_street',
            new_name='street',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_time',
            new_name='time',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_type',
            new_name='type',
        ),
        migrations.RenameField(
            model_name='game',
            old_name='game_zipcode',
            new_name='zipcode',
        ),
    ]
