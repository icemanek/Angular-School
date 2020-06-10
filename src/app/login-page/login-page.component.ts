import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  model: any = {};
  sessionStorageUser: string;
  localStorageUser: string;
  rememberMe: boolean;

  constructor(private router: Router, private http: HttpClient) {}

  ngOnInit(){
    this.sessionStorageUser = sessionStorage.getItem('username');
    this.localStorageUser = localStorage.getItem('username');
  }
 
  logout(){
    localStorage.removeItem(this.sessionStorageUser);
    localStorage.clear();
    sessionStorage.removeItem(this.sessionStorageUser);
    location.reload();
  }

  gotoHomepage() {
    this.router.navigate(['/home']);
  }

  loginUser(){
    let url = 'http://localhost:8080/login';

    this.http.post<Observable<boolean>>(url, {
      username: this.model.username,
      password: this.model.password

  }).subscribe(isValid => {
      if (isValid) {

        if(this.rememberMe == true){
          localStorage.setItem(
            'token', 
            btoa(this.model.username));

          localStorage.setItem('username', this.model.username);

          localStorage.setItem( 'role', 'user');
          
     this.gotoHomepage();
      location.reload();
    
    } else{
        sessionStorage.setItem(
          'token', 
          btoa(this.model.username));

          sessionStorage.setItem('username', this.model.username);

          sessionStorage.setItem( 'role', 'user');
        
          this.gotoHomepage();
    location.reload();
  }}
       else {
          alert("Authentication failed.")
      }
  });
  }}