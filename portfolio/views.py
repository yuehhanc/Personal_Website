# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from django.http import HttpResponse, Http404
from django.utils import timezone
from django.shortcuts import render, get_object_or_404, redirect
from django.core.urlresolvers import reverse
import os, shutil

# Create your views here.
def home(request):
    context = {}
    return render(request, 'portfolio/home.html', context)

def gallery(request):
    context = {}
    return render(request, 'portfolio/gallery.html', context)

def contact(request):
    context = {}
    return render(request, 'portfolio/contact.html', context)

def about(request):
    context = {}
    return render(request, 'portfolio/about.html', context)