import { Injectable } from '@angular/core';
import { doctors } from '../models/doctors';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {
  private url = "Doctor";
  constructor(private http: HttpClient) { }

  public getDoctors() : Observable<doctors[]> {
    
    return this.http.get<doctors[]>(`${environment.apiUrl}/${this.url}`);
  } 

}
