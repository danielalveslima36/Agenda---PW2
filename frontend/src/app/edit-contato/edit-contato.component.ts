import { MatSnackBar } from '@angular/material/snack-bar';
import { ContatoService } from './../service/contato.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Contato } from '../model/contato';

@Component({
  selector: 'app-edit-contato',
  templateUrl: './edit-contato.component.html',
  styleUrls: ['./edit-contato.component.css']
})
export class EditContatoComponent implements OnInit {

  contato:Contato;
  id:string

  constructor(
    private activeRouter: ActivatedRoute,
    private contatoService: ContatoService,
    private snackBar: MatSnackBar,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.contato = new Contato()
    this.activeRouter.queryParams.subscribe(params => {
      this.id = params.id
    })

    this.buscarContato(this.id)


  }

  buscarContato(id:string){
    try {
      this.contatoService.buscarPorID(this.id).subscribe(
        data => {
          this.contato = data
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  onSubmit(){
    try {
      this.contatoService.atualizarContato(this.contato).subscribe(
        (data) => {
          this.router.navigate([''])
          this.snackBar.open("Contato atualizado com sucesso")._dismissAfter(3000)
        }
      )
    } catch (error) {

    }
  }

}
