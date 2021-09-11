import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import { Observable, throwError } from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

   register(user: User){
    return this.http.post(`${environment.api}user/register`, user);
  }

  login(login:any){
    return this.http.post(`${environment.api}user/login`, login )
  }

  buscarPorId(){
    const id = this.getUserLogged();
    return this.http.get(`${environment.api}user/${id}`).pipe(
      map((data) => {
        let user:User = new User()
        user.email = data['user']['email'],
        user.username = data['user']['username']
        return user;
      })
    )
  }

  atualizarUser(user:User){
    const id = this.getUserLogged()
    return this.http.patch(`${environment.api}user/${id}`, user)
  }

  deleteUser(id: string){
    return this.http.delete(`${environment.api}user/${id}`)
  }

  getToken(){
    const token = window.localStorage.getItem('token')
    return token;
  }

  getUserLogged(){
    return window.localStorage.getItem('user')
  }

  logout(){
    window.localStorage.removeItem('token')
    window.localStorage.removeItem('user')
  }
}
