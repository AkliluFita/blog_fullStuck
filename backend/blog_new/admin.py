from django.contrib import admin
from blog_new import models

# register your models here
@admin.register(models.Post)    #register the post model
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'status', 'slug', 'author', 'image')    # lists to display in the admin page
    prepopulated_fields = {'slug': ('title',), }


admin.site.register(models.Category) #register the Category model