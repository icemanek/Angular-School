import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
baseUrl =  '//localhost:8080/';

  constructor(private http: HttpClient) { }


  createUser(user: User): Observable<any> {
    return this.http.post(this.baseUrl + '/user/add', user);
  }

  getAll(): Observable<any> {
    return this.http.get(this.baseUrl + '/user/all');
  }

  confirmAccount(user: User): Observable<any> {
    return this.http.put(this.baseUrl + 'user/confirm-account?token=' + 'window.param' , user);
  }

  resetPassword(user: User): Observable<any> {
    return this.http.post(this.baseUrl + '/password/forgot', user);
  }

  setNewPassword(user: User): Observable<any> {
    return this.http.post(this.baseUrl + '/password/reset', user);
  }

  loginUser(user: User): Observable<any> {

    const username = user.username;
    const password = user.password;

    console.log(username, password);

    return this.http.post(
      this.baseUrl + '/login',
      {username, password});
  }
}
