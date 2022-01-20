import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import {User, UserEnum} from './user/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient, private toastrService: ToastrService) {}

  createUser(user: User): Observable<any> {
    return this.http.post(`//localhost:8080/user/add`, user).pipe(
      catchError((err) => {
        this.toastrService.error(err.statusText);
        return throwError(err);
      })
    );
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/user/all').pipe(
      catchError((err) => {
        this.toastrService.error(err.statusText);
        return throwError(err);
      })
    );
  }
  confirmAccount(user: UserEnum): Observable<any> {
    const baseUrl = '//localhost:8080/';

    return this.http
      .put(baseUrl + 'user/confirm-account?token=' + 'window.param', user)
      .pipe(
        catchError((err) => {
          this.toastrService.error(err.statusText);
          return throwError(err);
        })
      );
  }

  resetPassword(user: UserEnum): Observable<any> {
    return this.http.post('//localhost:8080/password/forgot', user).pipe(
      catchError((err) => {
        this.toastrService.error(err.statusText);
        return throwError(err);
      })
    );
  }

  setNewPassword(user: UserEnum): Observable<any> {
    return this.http.post('//localhost:8080/password/reset', user).pipe(
      catchError((err) => {
        this.toastrService.error(err.statusText);
        return throwError(err);
      })
    );
  }

  loginUser(user: UserEnum) {
    const url = 'http://localhost:8080/login';

    const headers = new HttpHeaders({
      Authorization: 'Basic' + btoa(user[UserEnum.Username] + ':' + user[UserEnum.Password]),
    });

    return this.http.post(url, { headers, responseType: 'json' }).pipe(
      catchError((err) => {
        this.toastrService.error(err.statusText);
        return throwError(err);
      })
    );
  }
}
