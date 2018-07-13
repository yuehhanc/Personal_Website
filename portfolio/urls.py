from django.conf.urls import include, url
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    url(r'^$', views.home, name='home'),
    url(r'^gallery$', views.gallery, name='gallery'),
    url(r'^contact$', views.contact, name='contact'),
    url(r'^about$', views.about, name='about'),
]