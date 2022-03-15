import { LoginComponent } from './components/template/login/login.component';
import { HistoriasemquadrinhosComponent } from './views/historiasemquadrinhos/historiasemquadrinhos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import {PersonagensComponent} from './views/personagens/personagens.component';

const routes: Routes = [
  {
    path:"login",
    component: LoginComponent
  },
  {
  path:"",
  component: HomeComponent
  },
  {
  path:"personagens",
  component: PersonagensComponent
  },
  {
  path:"historiasemquadrinhos",
  component: HistoriasemquadrinhosComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
