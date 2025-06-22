from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
# from .models import my_model


# Create your views here.
@api_view(['GET'])
def get_requested_material(request):
    