import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://127.0.0.1:8000/api'; // Base URL de tu API

  constructor(private http: HttpClient) { }

  registrarAlumno(alumno: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/alumnos/`, alumno);
  }

  registrarResponsable(responsable: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/responsables/`, responsable);
  }

  inscribirAlumno(inscripcion: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/inscripciones/`, inscripcion);
  }

  obtenerResponsables(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/responsables/`);
  }
}
