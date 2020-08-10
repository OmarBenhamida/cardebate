import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SecteurautoComponent } from './secteurauto/secteurauto.component';
import { ActualiteComponent } from './actualite/actualite.component';
import { DetailsversionComponent } from './detailsversion/detailsversion.component';
import { VersionmodelComponent } from './versionmodel/versionmodel.component';
import { ModelmarqueComponent } from './modelmarque/modelmarque.component';
import { ComparateurComponent } from './comparateur/comparateur.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [AboutusComponent, SecteurautoComponent, ActualiteComponent, DetailsversionComponent, VersionmodelComponent, ModelmarqueComponent, ComparateurComponent, HomeComponent],
  imports: [
    CommonModule
  ]
})
export class UtilisateurModule { }
