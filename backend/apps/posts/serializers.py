from dataclasses import fields
from operator import mod
from rest_framework import serializers
from apps.posts.models import Post, Tag, Profile


class PostSerializer(serializers.ModelSerializer):
    class Meta:
        model = Post
        fields = (
            "id",
            "title",
            "subtitle",
            "slug",
            "publish_date",
            "published",
        )


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
