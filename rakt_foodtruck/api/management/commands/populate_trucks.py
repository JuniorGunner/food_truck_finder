import csv
from django.core.management.base import BaseCommand
from api.models import FoodTruck

class Command(BaseCommand):
    help = 'Load a list of food trucks from a CSV file into the database'

    def add_arguments(self, parser):
        parser.add_argument('csv_file', type=str, help='The CSV file path')

    def handle(self, *args, **kwargs):
        file_path = kwargs['csv_file']
        with open(file_path, mode='r', encoding='utf-8-sig') as file:
            reader = csv.DictReader(file)
            for row in reader:
                FoodTruck.objects.update_or_create(
                    locationid=row['locationid'],
                    defaults={
                        'applicant': row['Applicant'],
                        'facility_type': row['FacilityType'],
                        'address': row['Address'],
                        'food_items': row['FoodItems'],
                        'latitude': float(row['Latitude']),
                        'longitude': float(row['Longitude']),
                        'status': row['Status'],
                        'schedule_url': row['Schedule']
                    }
                )
        self.stdout.write(self.style.SUCCESS('Successfully populated database with food trucks'))
