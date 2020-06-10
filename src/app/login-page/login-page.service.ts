import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class LoginPageService {

  authenticated = false;

  constructor(private http: HttpClient) {}


  signUp(username: string, password: string) {
    return this.http.post(
      'http://localhost:8080/login',
      {username, password},
      {responseType: 'text'});
  }

}