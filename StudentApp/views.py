from rest_framework import viewsets
from .models import Alumno, Responsable, Inscripcion, Pago
from .serializers import AlumnoSerializer, ResponsableSerializer, InscripcionSerializer, PagoSerializer
import logging

class AlumnoViewSet(viewsets.ModelViewSet):
    queryset = Alumno.objects.all()
    serializer_class = AlumnoSerializer

class ResponsableViewSet(viewsets.ModelViewSet):
    queryset = Responsable.objects.all()
    serializer_class = ResponsableSerializer

class InscripcionViewSet(viewsets.ModelViewSet):
    queryset = Inscripcion.objects.all()
    serializer_class = InscripcionSerializer

    def create(self, request, *args, **kwargs):
        logger.info(f"Datos recibidos para crear inscripción: {request.data}")
        return super().create(request, *args, **kwargs)
class PagoViewSet(viewsets.ModelViewSet):
    queryset = Pago.objects.all()
    serializer_class = PagoSerializer
