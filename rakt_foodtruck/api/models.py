from django.db import models
from django.contrib.gis.db import models
from django.contrib.gis.geos import Point


class FoodTruck(models.Model):
    locationid = models.CharField(max_length=100, unique=True)
    applicant = models.CharField(max_length=255)
    facility_type = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    food_items = models.TextField()
    latitude = models.FloatField()
    longitude = models.FloatField()
    status = models.CharField(max_length=100)
    schedule_url = models.URLField(max_length=255, blank=True)
    location = models.PointField(help_text="Represented as (longitude, latitude)")


    def save(self, *args, **kwargs):
        self.location = Point(self.longitude, self.latitude, srid=4326)
        super().save(*args, **kwargs)


    def __str__(self):
        return self.applicant
