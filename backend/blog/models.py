from django.db import models
from django.conf import settings


class Category(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name
    

class Post(models.Model):
    title = models.CharField(max_length=100, blank=True, default='')
    desc = models.CharField(max_length=500, blank=True, default='')
    username = models.CharField(max_length=100, unique=True, null=True)
    category = models.CharField(max_length=100 ,null=True)   #to protect post if we need to delete the category
    photo = models.CharField(max_length=100, blank=True, default='')
    created = models.DateTimeField(auto_now_add=True)

   

    
    class Meta:
        ordering = ['created']   # to list posts based on the published time
    
    def __str__(self):
        return self.title



