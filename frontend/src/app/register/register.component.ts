import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user: User

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.user = new User();
  }

  onSubmit() {
    this.userService.register(this.user).subscribe(
      result => {
        console.log(result)
        this.snackBar.open('Cadastro bem sucedido!!')._dismissAfter(3000)
        this.router.navigate(['']);

      },
      error => {
        console.log(error)
      },
    )
  }


}
