import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {
  alumno = {
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    cedula: ''
  };

  responsable = {
    nombre: '',
    apellido: '',
    numero: ''
  };

  inscripcion = {
    cedulaAlumno: '',
    responsable: null,
    relacionResponsable: '',
    nivel: '',
    ciclo: '',
    especializacion: null,
    gradoCurso: '',
    turno: '',
    matricula: null as number | null // Ahora matricula puede ser null o number
  };

  responsables: any[] = [];

  mostrarFormularioAlumnos: boolean = false;
  mostrarFormularioResponsables: boolean = false;
  mostrarFormularioInscripcion: boolean = false;

  // Opciones de matrícula según el nivel de educación
  matriculaOptions: { [key: string]: number } = {
    nivel_inicial: 500000,
    educacion_basica: 500000,
    educacion_media: 800000
  };

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.obtenerResponsables().subscribe(
      (data: any[]) => {
        this.responsables = data;
      },
      error => {
        console.error('Error al obtener responsables:', error);
      }
    );
  }

  mostrarFormularioAlumno() {
    this.mostrarFormularioAlumnos = true;
    this.mostrarFormularioResponsables = false;
    this.mostrarFormularioInscripcion = false;
  }

  mostrarFormularioResponsable() {
    this.mostrarFormularioResponsables = true;
    this.mostrarFormularioAlumnos = false;
    this.mostrarFormularioInscripcion = false;
  }

  mostrarFormularioInscripciones() {
    this.mostrarFormularioInscripcion = true;
    this.mostrarFormularioAlumnos = false;
    this.mostrarFormularioResponsables = false;
  }

  // Método para calcular y asignar la matrícula según el nivel seleccionado
  actualizarMatricula() {
    const nivelSeleccionado = this.inscripcion.nivel;
    if (nivelSeleccionado) {
      this.inscripcion.matricula = this.matriculaOptions[nivelSeleccionado];
    } else {
      this.inscripcion.matricula = null; // Asignamos null cuando no hay nivel seleccionado
    }
  }

  submitFormAlumno() {
    this.apiService.registrarAlumno(this.alumno).subscribe(() => {
      alert('Alumno registrado con éxito');
      this.alumno = {
        nombre: '',
        apellido: '',
        fecha_nacimiento: '',
        cedula: ''
      };
    }, error => {
      console.error('Error al registrar alumno:', error);
    });
  }

  submitFormResponsable() {
    this.apiService.registrarResponsable(this.responsable).subscribe(() => {
      alert('Responsable registrado con éxito');
      this.responsable = {
        nombre: '',
        apellido: '',
        numero: ''
      };
    }, error => {
      console.error('Error al registrar responsable:', error);
    });
  }

  submitFormInscripcion() {
    this.apiService.inscribirAlumno({
      cedula: this.inscripcion.cedulaAlumno,
      responsable_id: this.inscripcion.responsable,
      relacion: this.inscripcion.relacionResponsable,
      nivel: this.inscripcion.nivel,
      ciclo: this.inscripcion.ciclo,
      especializacion: this.inscripcion.especializacion,
      grado_curso: this.inscripcion.gradoCurso,
      turno: this.inscripcion.turno,
      matricula: this.inscripcion.matricula
    }).subscribe(() => {
      alert('Alumno inscrito con éxito');
      this.inscripcion = {
        cedulaAlumno: '',
        responsable: null,
        relacionResponsable: '',
        nivel: '',
        ciclo: '',
        especializacion: null,
        gradoCurso: '',
        turno: '',
        matricula: null // Volvemos a asignar null después de la inscripción
      };
    }, error => {
      console.error('Error al inscribir alumno:', error);
    });
  }
}
