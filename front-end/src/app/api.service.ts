import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private alumnosUrl = 'http://127.0.0.1:8000/api/alumnos/';
  private responsablesUrl = 'http://127.0.0.1:8000/api/responsables/';
  private inscripcionesUrl = 'http://127.0.0.1:8000/api/inscripciones/';

  constructor(private http: HttpClient) { }

  registrarAlumno(alumno: any): Observable<any> {
    return this.http.post(this.alumnosUrl, alumno);
  }

  registrarResponsable(responsable: any): Observable<any> {
    return this.http.post(this.responsablesUrl, responsable);
  }

  inscribirAlumno(inscripcion: any): Observable<any> {
    return this.http.post(this.inscripcionesUrl, inscripcion);
  }
}
