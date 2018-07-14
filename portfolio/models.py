# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Message(models.Model):
    email        = models.EmailField(blank=True, max_length=50)
    message          = models.CharField(blank=True, max_length=500, name='message')
    update_time  = models.DateTimeField()

    def __unicode__(self):
        return 'message(' + self.email + ', ' + self.update_time+ ')'