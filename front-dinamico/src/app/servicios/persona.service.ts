import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Persona } from 'src/app/modelos/persona';
import { environment } from 'src/environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  private apiServerUrl=environment.apiBaseUrl;

  private _refresh$ = new Subject<void>();

  constructor(private http:HttpClient) { }

  get refres$(){
    return this._refresh$;
  }

  obtenerDatosPersona(): Observable<Persona> {
    return this.http.get<Persona>(`${this.apiServerUrl}/persona/1`);
  }

  editarDatosPersona(persona:Persona): Observable<any> {
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/update`, persona);
    // return this.http.put('http://localhost:3000/posts/1', persona);
  }

  agregarPersona(persona:Persona): Observable<any> {
    return this.http.put<Persona>(`${this.apiServerUrl}/persona/update`, persona)
    .pipe(
      tap(() => {
        this._refresh$.next();
      })
    )
  }

  obtenerDatosPersonas(): Observable<Persona[]> {
    return this.http.get<Persona[]>(`${this.apiServerUrl}/persona`);
  }

  public deletePersona(id : any):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/persona/${id}`);
  }
}



