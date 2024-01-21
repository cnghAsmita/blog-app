from django.core.exceptions import ObjectDoesNotExist
from rest_framework.exceptions import APIException
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

from blog_app.api_response import CustomException
from blog_app.users.models import User


class LoginSerializer(TokenObtainPairSerializer):

    def validate(self, attrs):
        try:
            user = User.objects.get(email=attrs.get("email"))
        except ObjectDoesNotExist:
            raise CustomException(message="No active account found with the given credentials", status=401)

        data = super().validate(attrs)

        data.update({
            "username": user.username,
            "user_id": user.id
        })

        return data
