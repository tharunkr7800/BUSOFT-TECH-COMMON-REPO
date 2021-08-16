import { Injectable } from '@angular/core';
import {Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { throwError } from 'rxjs/internal/observable/throwError';

export interface Auth{
  token:'Test',
  authendicated:false
}

@Injectable({
  providedIn: 'root'
})

export class LoginService{
  
  authData = new Subject();
  constructor(

    private http: HttpClient,

  ) { 
    
  }

  setAuthData(data:any){
    this.authData.next(data);
  }

  getAuthData(){
    return this.authData;
  }

  loginUser(loginUser: any) : Observable<any>{
    //collecting the login contents in a variable

    const body  = {
        email: loginUser.email,
        password: loginUser.password
    }

    console.log(body.email);
    console.log(body.password);
    
    //posting the login contents to the api
    return this.http.post('http://localhost:3000/users/login',body , {
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
