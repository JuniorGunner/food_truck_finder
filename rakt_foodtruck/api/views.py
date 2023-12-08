from rest_framework import viewsets
from .models import FoodTruck
from .serializers import FoodTruckSerializer

class FoodTruckViewSet(viewsets.ModelViewSet):
    queryset = FoodTruck.objects.all()
    serializer_class = FoodTruckSerializer
