import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }


  createUser(user: User): Observable<any> {
    return this.http.post(`//localhost:8080/user/add`, user);
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/user/all');
  }

  confirmAccount(user: User): Observable<any> {
    const baseUrl = '//localhost:8080/';

    return this.http.put(baseUrl + 'user/confirm-account?token=' + 'window.param' , user);
  }

  resetPassword(user: User): Observable<any>{
    return this.http.post('//localhost:8080/password/forgot', user);
  }

  setNewPassword(user: User): Observable<any>{
    return this.http.post('//localhost:8080/password/reset', user);
  }

  loginUser(user: User): Observable<any> {

    const username = user.username;
    const password = user.password;

    console.log(username, password);

    return this.http.post(
      '//localhost:8080/login',
      {username, password});
  }
}