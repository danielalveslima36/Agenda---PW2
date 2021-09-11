import { MatSnackBar } from '@angular/material/snack-bar';
import { ContatoService } from './../service/contato.service';
import { Contato } from '../model/contato';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos:Contato[] = []

  dataSource: any

  displayedColumns: string[] = ['id', 'nome', 'telefone', 'delete', 'update']

  constructor(
    private contatoService: ContatoService,
    private snackbar: MatSnackBar
    ) { }

  ngOnInit(): void {
    this.loadContatos()

  }

  loadContatos(){
    try {
      this.contatoService.loadContatos().subscribe(
        (contatos) => {
          this.contatos = contatos
          this.dataSource = contatos
        }
      )
    } catch (error) {
      console.log(error)
    }
  }

  delete(id: string){
    try {
      this.contatoService.deleteContato(id).subscribe(
        (data) => {
          this.loadContatos();
          this.snackbar.open("Contato excluido com sucesso")._dismissAfter(3000)
        }
      )
    } catch (error) {
      console.log(error)
    }
  }





}
