import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User

  constructor(
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.user = new User()
    this.buscarUsuario()
  }

  buscarUsuario() {
    try {
      this.userService.buscarPorId().subscribe(
        data => this.user = data
      )
    } catch (error) {
      console.log(error)
    }
  }

  AtualizarUser() {
    this.userService.atualizarUser(this.user).subscribe(
      (data) => {
        this.router.navigate([''])
        this.snackBar.open("Usuario atualizado com sucesso")._dismissAfter(3000)
      }
    )
  }

  DeleteUser(){
    try {
      const id = this.userService.getUserLogged()
      this.userService.deleteUser(id).subscribe(
        (data) => {
          this.userService.logout()
          this.router.navigate(['/login'])
          this.snackBar.open("Conta excluida com sucesso")._dismissAfter(3000)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

}
