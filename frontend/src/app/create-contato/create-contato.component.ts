import { ContatoService } from './../service/contato.service';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-create-contato',
  templateUrl: './create-contato.component.html',
  styleUrls: ['./create-contato.component.css']
})
export class CreateContatoComponent implements OnInit {

  contato:Contato;

  constructor(
    private contatoService: ContatoService,
    private router: Router,
    private snackBar: MatSnackBar,
    ) { }

  ngOnInit(): void {
    this.contato = new Contato()
  }

  onSubmit(){
    try {
      this.contatoService.createContato(this.contato).subscribe(
        (data) => {
          console.log(data)
          this.router.navigate([''])
          this.snackBar.open("Contato cadastro com sucesso")._dismissAfter(3000);
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

}
