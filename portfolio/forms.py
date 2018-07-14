from django import forms

from django.contrib.auth.models import User
from portfolio.models import Message

class MessageForm(forms.ModelForm):
    class Meta:
        model = Message
        # fields = '__all__'
        exclude = {'update_time'}
        widgets = {
            'email': forms.EmailInput(attrs={'placeholder':'Your email :)', 'class':'email'}),
            'message': forms.Textarea(attrs={'placeholder':"What's on your mind?", 'class':'message'}),
        }
        labels = {
            "email": '',
            "message": '',
        }
