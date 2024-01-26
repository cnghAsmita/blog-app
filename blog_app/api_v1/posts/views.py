from rest_framework import status
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework.viewsets import ModelViewSet

from blog_app.api_response import CustomResponse
from blog_app.api_v1.posts.serializers import PostModelSerializer, PostListSerializer
from blog_app.posts.models import Post


class PostModelViewSet(ModelViewSet):
    serializer_class = PostModelSerializer
    queryset = Post.objects.all()
    permission_classes = [IsAuthenticatedOrReadOnly]

    def list(self, request, *args, **kwargs):
        queryset = self.filter_queryset(self.get_queryset())

        page = self.paginate_queryset(queryset)
        if page is not None:
            serializer = self.get_serializer(page, many=True)
            return self.get_paginated_response(serializer.data)

        serializer = PostListSerializer(queryset, many=True)

        return CustomResponse(serializer.data)

    def create(self, request, *args, **kwargs):
        data = request.data
        data['author'] = request.user.id
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return CustomResponse(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
