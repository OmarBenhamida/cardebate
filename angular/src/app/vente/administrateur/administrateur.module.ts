import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompteComponent } from './compte/compte.component';
import { AnnoncesComponent } from './annonces/annonces.component';
import { AdministrateurComponent } from './administrateur.component';



@NgModule({
  declarations: [CompteComponent, AnnoncesComponent, AdministrateurComponent],
  imports: [
    CommonModule
  ]
})
export class AdministrateurModule { }
