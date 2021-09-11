import { EditUserComponent } from './edit-user/edit-user.component';
import { EditContatoComponent } from './edit-contato/edit-contato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { ContatosComponent } from './contatos/contatos.component';
import { CreateContatoComponent } from './create-contato/create-contato.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      { path:'', component: ContatosComponent },
      { path:'create', component: CreateContatoComponent },
      { path:'contato/edit', component: EditContatoComponent},
      { path:'user/edit', component: EditUserComponent}

    ],
    canActivate: [AuthGuard]
  },

  {
    path:'',
    component: AuthenticationComponent,
    children:[
      { path:'login', component: LoginComponent },
      { path:'register', component: RegisterComponent }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
