from rest_framework import serializers
from .models import FoodTruck

class FoodTruckSerializer(serializers.ModelSerializer):
    """
    Serializer for the FoodTruck model.

    This serializer converts complex types such as the FoodTruck model instances
    into Python datatypes that can then be easily rendered into JSON, XML, or
    other content types. The serializer also provides deserialization, allowing
    parsed data to be converted back into complex types, after first validating
    the incoming data.

    The 'Meta' class within defines the model to be serialized and the fields
    that should be included in the serialized output. Here, '__all__' specifies
    that all fields in the FoodTruck model should be included.
    """
    class Meta:
        model = FoodTruck
        fields = '__all__'
