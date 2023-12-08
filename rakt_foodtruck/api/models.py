from django.db import models


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


    def __str__(self):
        return self.applicant
