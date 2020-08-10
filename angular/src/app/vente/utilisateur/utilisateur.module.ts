import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ParametreComponent } from './parametre/parametre.component';
import { DepotannonceComponent } from './depotannonce/depotannonce.component';
import { AnnonceComponent } from './annonce/annonce.component';
import { UtilisateurComponent } from './utilisateur.component';



@NgModule({
  declarations: [HomeComponent, LoginComponent, ParametreComponent, DepotannonceComponent, AnnonceComponent, UtilisateurComponent],
  imports: [
    CommonModule
  ]
})
export class UtilisateurModule { }
