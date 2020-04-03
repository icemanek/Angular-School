import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent{

  hide = true;
  user: User;
  minDate: Date;
  maxDate: Date;
  startDate: Date;
  created: Date;
  password: string;
  confirmPassword: string;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();

// Date section

    this.user.created = new Date(Date.now());
    this.minDate = new Date(Date.now());
    this.maxDate = new Date(Date.now());

    this.minDate.setDate( this.minDate.getDate() );
    this.minDate.setFullYear( this.minDate.getFullYear() - 100 );

// setting the calendar's start date and youngest birth dates for > 18 years old
    this.maxDate.setDate( this.maxDate.getDate() );
    this.maxDate.setFullYear( this.maxDate.getFullYear() - 18 );
    this.startDate = this.maxDate;

  }


  registerNewUser() {
    this.userService.createUser(this.user).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/user/all']);
  }


}