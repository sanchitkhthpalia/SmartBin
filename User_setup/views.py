from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.authtoken.models import Token
from .serializers import UserLoginSerializer, UserSignupSerializer

# Create your views here.
@api_view(["POST"])
def login_user(request):
    serializer = UserLoginSerializer(data = request.data)
    if serializer.is_valid():
        user = serializer.validate_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            "user_id": user.id,
            'user_name': user.username,
            'email': user.email,
        })
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def signup_user(request):
    serializer = UserSignupSerializer(data=request.data)
    if serializer.is_valid():
        user = serializer.save()
        token = Token.objects.create(user=user)
        return Response({
            'token': token,
            'user_id': user.id,
            'user_name': user.username,
        }, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)