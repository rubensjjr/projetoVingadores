import { AuthService } from './components/template/login/auth.service';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';

import {MatSidenavModule} from '@angular/material/sidenav'
import {MatCardModule} from '@angular/material/card'
import {MatListModule} from '@angular/material/list';
import { HomeComponent } from './views/home/home.component';

import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';
import { HistoriasemquadrinhosComponent } from './views/historiasemquadrinhos/historiasemquadrinhos.component';
import { CharactersApiService } from './services/characters-api.service';
import { PersonagensComponent }from './views/personagens/personagens.component';
import { LoginComponent } from './components/template/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    PersonagensComponent,
    HistoriasemquadrinhosComponent,
    LoginComponent
  ],
  imports: [
    MatCardModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    MarvelService,
    AuthService
    
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
