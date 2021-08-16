import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formData } from '../model/data-model';

@Injectable({
  providedIn: 'root',
})
export class IncidentService {
  constructor(private http: HttpClient) {}
  getIncidentInfo(): Observable<formData> {
    return this.http.get<formData>('./assets/data/incident-info.json');
  }
  getContactInfo():Observable<formData>{
    return this.http.get<formData>('./assets/data/contact.json');
  }
}
