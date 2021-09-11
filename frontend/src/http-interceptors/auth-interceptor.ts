import { catchError } from 'rxjs/operators';
import { UserService } from './../app/service/user.service';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
class AuthInterceptor implements HttpInterceptor {

  constructor(private userService: UserService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userService.getToken();
    let request: HttpRequest<any> = req
    if(token){
      request = req.clone({
        headers: req.headers.set('Auth-Token', `${token}`)
      })
    }

    return next.handle(request).pipe(
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      console.error('Ocorreu um erro', error.error.message)
    }else{
      console.error(
        `Codigo de erro ${error.status}` +
        `Erro ${JSON.stringify(error.error)}`
      )

      return throwError('Ocorreu um erro, tente novamente');
    }
  }
}

export {AuthInterceptor}
