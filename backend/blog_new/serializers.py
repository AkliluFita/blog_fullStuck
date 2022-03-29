from rest_framework import serializers
from blog_new.models import Post


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        fields = ('id', 'title', 'image','author', 'excerpt', 'content', 'status', 'published')
        model = Post



# the serializered data items can be desplayed to the client to access