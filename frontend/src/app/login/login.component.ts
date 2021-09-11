import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email: '',
    password: ''
  }

  constructor(
    private userService: UserService,
    private router: Router,
  ) { }


  ngOnInit(): void {
  }

   onSubmit(){
    try {
     this.userService.login(this.login).subscribe(
       (data) =>{
          const token = data['token']
          const user = data['user']
          window.localStorage.setItem('token', token);
          window.localStorage.setItem('user', user);
          this.router.navigate([''])
       },
     )
    } catch (e) {
      console.error(e);
    }
  }

}
