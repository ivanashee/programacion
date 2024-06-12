from django.urls import path, include
from rest_framework import routers
from .views import AlumnoViewSet, ResponsableViewSet, InscripcionViewSet, PagoViewSet

router = routers.DefaultRouter()
router.register(r'alumnos', AlumnoViewSet)
router.register(r'responsables', ResponsableViewSet)
router.register(r'inscripciones', InscripcionViewSet)
router.register(r'pagos', PagoViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
