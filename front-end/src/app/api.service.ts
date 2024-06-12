// api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrlAlumnos = 'http://127.0.0.1:8000/api/alumnos/';
  apiUrlResponsables = 'http://127.0.0.1:8000/api/responsables/';
  apiUrlInscripciones = 'http://127.0.0.1:8000/api/inscripciones/';

  constructor(private http: HttpClient) {}

  registrarAlumno(alumno: any): Observable<any> {
    return this.http.post(this.apiUrlAlumnos, alumno);
  }

  registrarResponsable(responsable: any): Observable<any> {
    return this.http.post(this.apiUrlResponsables, responsable);
  }

  inscribirAlumno(inscripcion: any): Observable<any> {
    return this.http.post(this.apiUrlInscripciones, inscripcion);
  }
}
