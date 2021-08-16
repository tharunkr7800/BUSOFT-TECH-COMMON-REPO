import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { formData } from '../model/data-model';
import {ContactsComponent} from '../contacts/contacts.component';
import { catchError } from 'rxjs/internal/operators';
@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http:HttpClient) { }

  getContactInfo():Observable<formData>{
    return this.http.get<formData>('./assets/data/contact-info.json');
  }

  searchContactInfo(searchContactData : any): Observable<any>{

    const body = {
      lastName:searchContactData.lastName,
      officePhoneNo:searchContactData.officePhoneNo,
      email:searchContactData.email
    }

    return this.http.post('http://localhost:3000/contacts/createContact',body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(
      catchError(this.handleError)
    );
  }

  //For handling errors
  private handleError(error: HttpErrorResponse): any {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
   
  }

