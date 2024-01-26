from rest_framework.fields import SerializerMethodField
from rest_framework.serializers import ModelSerializer

from blog_app.posts.models import Post


class PostModelSerializer(ModelSerializer):
    class Meta:
        model = Post
        fields = "__all__"


class PostListSerializer(ModelSerializer):
    author_username = SerializerMethodField()

    class Meta:
        model = Post
        fields = ('id', 'title', 'description', 'published_at', 'author_username')
        order_by = ('-published_at', )

    def get_author_username(self, obj):
        return obj.author.username
