import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ContatosComponent } from './contatos/contatos.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { httpInterceptorProviders } from "./../http-interceptors";
import { CreateContatoComponent } from './create-contato/create-contato.component';
import {MatTableModule} from '@angular/material/table';
import { EditContatoComponent } from './edit-contato/edit-contato.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContatosComponent,
    AuthenticationComponent,
    HomeComponent,
    CreateContatoComponent,
    EditContatoComponent,
    EditUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatSnackBarModule,
    MatTableModule,
    MatTableModule,
    MatToolbarModule,
  ],
  providers: [
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
