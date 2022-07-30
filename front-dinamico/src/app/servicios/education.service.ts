import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Education } from '../modelos/education';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  private apiServerUrl=environment.apiBaseUrl;

  constructor(private http:HttpClient) { }

  public getEducation():Observable<Education[]> {
    return this.http.get<Education[]>(`${this.apiServerUrl}/education/all`);
  }

  public addEducation(education : Education):Observable<Education> {
    return this.http.post<Education>(`${this.apiServerUrl}/education/add`, education);
  }

  public updatetEducation(education : Education):Observable<Education> {
    return this.http.put<Education>(`${this.apiServerUrl}/education/update`, education);
  }

  public deletetEducation(id : number):Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/education/delete/${id}`);
  }
}
