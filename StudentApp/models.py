from django.db import models

class Alumno(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    fecha_nacimiento = models.DateField()
    cedula = models.CharField(max_length=20)

class Responsable(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    numero = models.CharField(max_length=20)

class Inscripcion(models.Model):


    ALTERNATIVAS_NIVEL = [
        ('nivel_inicial', 'Nivel Inicial'),
        ('educacion_basica', 'Educación Básica'),
        ('educacion_media', 'Educación Media'),
    ]

    ALTERNATIVAS_CICLO = [
        ('preescolar', 'Preescolar'),
        ('ciclo_1', 'Ciclo 1'),
        ('ciclo_2', 'Ciclo 2'),
        ('ciclo_3', 'Ciclo 3'),
        ('bachillerato', 'Bachillerato'),
    ]

    ALTERNATIVAS_ESPECIALIZACION = [
        ('BTI', 'BTI'),
        ('BATAN', 'BATAN'),
        ('ciencias_basicas', 'Ciencias Básicas'),
        ('ciencias_sociales', 'Ciencias Sociales'),
    ]

    ALTERNATIVAS_GRADO_CURSO = [
        ('pre-jardin', 'Pre-jardín'),
        ('jardin', 'Jardín'),
        ('preescolar', 'Preescolar'),
        ('primer_grado', 'Primer Grado'),
        ('segundo_grado', 'Segundo Grado'),
        ('tercer_grado', 'Tercer Grado'),
        ('cuarto_grado', 'Cuarto Grado'),
        ('quinto_grado', 'Quinto Grado'),
        ('sexto_grado', 'Sexto Grado'),
        ('septimo_grado', 'Séptimo Grado'),
        ('octavo_grado', 'Octavo Grado'),
        ('noveno_grado', 'Noveno Grado'),
        ('primer_curso', 'Primer Curso'),
        ('segundo_curso', 'Segundo Curso'),
        ('tercer_curso', 'Tercer Curso'),
    ]
    ALTERNATIVAS_RELACION = [
        ('madre', 'Madre'),
        ('padre', 'Padre'),
        ('tutor', 'Tutor'),
    ]

    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    responsables = models.ManyToManyField(Responsable)
    relacion = models.CharField(max_length=20, choices=ALTERNATIVAS_RELACION)
    nivel = models.CharField(max_length=100, choices=ALTERNATIVAS_NIVEL)
    ciclo = models.CharField(max_length=100, choices=ALTERNATIVAS_CICLO)
    especializacion = models.CharField(max_length=100, choices=ALTERNATIVAS_ESPECIALIZACION, blank=True, null=True)
    grado_curso = models.CharField(max_length=100, choices=ALTERNATIVAS_GRADO_CURSO)
    matricula = models.DecimalField(max_digits=10, decimal_places=2)

    def save(self, *args, **kwargs):
        if self.nivel == 'nivel_inicial' or self.nivel == 'educacion_basica':
            self.matricula = 500000
        elif self.nivel == 'educacion_media':
            self.matricula = 800000
        super().save(*args, **kwargs)

class Pago(models.Model):
    alumno = models.ForeignKey(Alumno, on_delete=models.CASCADE)
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    pagado = models.BooleanField(default=False)
