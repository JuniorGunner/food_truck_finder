from rest_framework import viewsets, filters
from django_filters.rest_framework import DjangoFilterBackend
from .models import FoodTruck
from .serializers import FoodTruckSerializer
from django.shortcuts import render
from django.contrib.gis.measure import D
from django.contrib.gis.geos import Point
from django.contrib.gis.db.models.functions import Distance

class FoodTruckViewSet(viewsets.ModelViewSet):
    """
    A viewset for viewing and editing food truck instances.

    This viewset provides `list`, `create`, `retrieve`, `update`,
    and `destroy` actions, automatically mapped to the appropriate
    URL patterns. Additionally, it supports filtering and searching
    against the 'applicant', 'address', and 'food_items' fields.

    The `get_queryset` method is overridden to allow filtering by
    geographic location and distance, when 'lat', 'lng', and 'distance'
    parameters are provided in the request.
    """
    queryset = FoodTruck.objects.all()
    serializer_class = FoodTruckSerializer
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    search_fields = ['applicant', 'address', 'food_items']

    def get_queryset(self):
        # Custom queryset filtering based on location and distance
        queryset = super().get_queryset()
        lat = self.request.query_params.get('lat', None)
        lng = self.request.query_params.get('lng', None)
        distance = self.request.query_params.get('distance', None)  # Distance in kilometers

        if lat and lng:
            # Convert latitude and longitude to a Point
            user_location = Point(float(lng), float(lat), srid=4326)

            if distance:
                # Filter by distance
                queryset = queryset.annotate(distance=Distance('location', user_location)).order_by('distance')
                distance_from_point = D(km=int(distance))
                queryset = queryset.filter(location__distance_lte=(user_location, distance_from_point))

        return queryset


def show_map(request):
    """
    Render the map view template.

    This view simply renders the map.html template. The actual
    map and its functionality are implemented client-side in JavaScript.
    """
    return render(request, 'map.html')
