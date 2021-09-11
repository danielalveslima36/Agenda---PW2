import { map } from 'rxjs/operators';
import { Contato } from './../model/contato';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';
import { env } from 'process';

@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(private http: HttpClient) { }

  createContato(contato:Contato){
    return this.http.post(`${environment.api}contato`, contato)
  }

  loadContatos(){
    return this.http.get<Contato[]>(`${environment.api}contato`).pipe(
      map((contatos) => {
        let listaContatos: Contato[] = []
        contatos['contatos'].forEach(contato => {
          listaContatos.push( {
            id: contato['id'],
            nome: contato['nome'],
            telefone: contato['telefone']
          })
        });
        return listaContatos
      })
    )
  }

  deleteContato(id: string){
    return this.http.delete(`${environment.api}contato/${id}`)
  }

  buscarPorID(id:string){
    return this.http.get<Contato>(`${environment.api}contato/${id}`).pipe(
      map((data) => {
        let contato: Contato = new Contato()
        contato.id = data['contato']['id']
        contato.nome =  data['contato']['nome'],
        contato.telefone = data['contato']['telefone']
        return contato
      })
    )
  }

  atualizarContato(contato:Contato){
    return this.http.patch(`${environment.api}contato/${contato.id}`, contato)
  }
}
