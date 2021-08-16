import { tokenize } from '@angular/compiler/src/ml_parser/lexer';
import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const USER_KEY = 'auth-user';
const  AUTH= 'isAuthenticated';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  static isAuthenticated: string;

  constructor() { }

  signOut() {
    window.localStorage.clear();
  }

  
  public saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    
  }

  public getToken(){
    return localStorage.getItem(TOKEN_KEY);

  }

  public saveUser(user:any) {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public getUser() {
    
    return JSON.parse(JSON.stringify(localStorage.getItem("userProfile")));
 }
}

