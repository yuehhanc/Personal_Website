# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.utils import timezone
from django.shortcuts import render, get_object_or_404, redirect
from django.core.urlresolvers import reverse
from django.db import transaction
from portfolio.forms import MessageForm
from portfolio.models import Message
from django.utils import timezone
import os, shutil

# Create your views here.
def home(request):
    context = {}
    return render(request, 'portfolio/home.html', context)

def gallery(request):
    context = {}
    return render(request, 'portfolio/gallery.html', context)

@transaction.atomic
def contact(request):
    context = {}
    if request.method == 'GET':
        context['form'] = MessageForm()
        return render(request, 'portfolio/contact.html', context)

    form = MessageForm(request.POST)
    context['form'] = form

    if not form.is_valid():
        return render(request, 'portfolio/contact.html', context)

    new_message = Message(email=form.cleaned_data['email'],
                          message=form.cleaned_data['message'],
                          update_time=timezone.now())
    new_message.save()
    context['success'] = True
    return render(request, 'portfolio/contact.html', context)

def about(request):
    context = {}
    return render(request, 'portfolio/about.html', context)

