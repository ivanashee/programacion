from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('StudentApp.urls')),  # Incluye las URL de tu aplicación de alumnos
    # Agrega otras URL de nivel superior según sea necesario
]
