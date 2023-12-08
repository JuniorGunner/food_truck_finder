from django.contrib import admin
from .models import FoodTruck

class FoodTruckAdmin(admin.ModelAdmin):
    list_display = [field.name for field in FoodTruck._meta.get_fields()]

admin.site.register(FoodTruck, FoodTruckAdmin)
