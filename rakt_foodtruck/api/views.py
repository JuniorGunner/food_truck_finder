from rest_framework import viewsets
from .models import FoodTruck
from .serializers import FoodTruckSerializer
from django.shortcuts import render

class FoodTruckViewSet(viewsets.ModelViewSet):
    queryset = FoodTruck.objects.all()
    serializer_class = FoodTruckSerializer


def show_map(request):
    return render(request, 'map.html')
