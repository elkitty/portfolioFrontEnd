import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from 'src/app/modelos/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  constructor(private http:HttpClient) { }

  obtenerDatosPersona(): Observable<any> {
    return this.http.get('./assets/data/persona.json');
  }

  editarDatosPersona(persona:Persona): Observable<any> {
    return this.http.post<Persona>('http://localhost:3000/posts', persona);
  }
}
