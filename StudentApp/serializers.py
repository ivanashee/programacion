from rest_framework import serializers
from .models import Alumno, Responsable, Inscripcion, Pago

class AlumnoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Alumno
        fields = '__all__'

class ResponsableSerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsable
        fields = '__all__'

class InscripcionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Inscripcion
        fields = '__all__'

class PagoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pago
        fields = '__all__'
