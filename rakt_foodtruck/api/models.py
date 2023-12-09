from django.db import models
from django.contrib.gis.db import models as gis_models
from django.contrib.gis.geos import Point


class FoodTruck(models.Model):
    """
    Represents a food truck entity with its location and details.

    Each food truck has a unique location ID, name of the applicant (owner),
    the type of facility, the address where it is usually located, the food items
    it sells, and its geographical coordinates. The status indicates the operational
    state of the food truck, and the schedule URL can link to its schedule if available.

    The `location` field is a geographic point field that stores the latitude and
    longitude coordinates for spatial database operations. It is automatically
    updated whenever the FoodTruck instance is saved.

    Attributes:
        locationid (CharField): A unique identifier for the food truck.
        applicant (CharField): The name of the food truck owner or operator.
        facility_type (CharField): The type of facility, e.g., 'Truck' or 'Cart'.
        address (CharField): The usual stationed address of the food truck.
        food_items (TextField): Description of the food items offered.
        latitude (FloatField): Latitude part of the truck's coordinates.
        longitude (FloatField): Longitude part of the truck's coordinates.
        status (CharField): The operating status of the food truck, e.g., 'ACTIVE'.
        schedule_url (URLField): A URL to the food truck's schedule, if available.
        location (PointField): Geographic point field to store coordinates.
    """
    locationid = models.CharField(max_length=100, unique=True)
    applicant = models.CharField(max_length=255)
    facility_type = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    food_items = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=100)
    schedule_url = models.URLField(max_length=255, blank=True)
    location = gis_models.PointField(geography=True, null=True, blank=True)


    def save(self, *args, **kwargs):
        """
        Overwrites the save method to update the location field with
        the Point representation of latitude and longitude before saving.
        """
        self.location = Point(self.longitude, self.latitude, srid=4326)
        super().save(*args, **kwargs)


    def __str__(self):
        """
        Returns the string representation of the FoodTruck, which is the name of the applicant.
        """
        return self.applicant
