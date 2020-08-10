import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaysComponent } from './pays/pays.component';
import { MarqueComponent } from './marque/marque.component';
import { ModelComponent } from './model/model.component';
import { ModeleComponent } from './modele/modele.component';
import { VersionComponent } from './version/version.component';
import { CarburantComponent } from './carburant/carburant.component';
import { TransmissionComponent } from './transmission/transmission.component';
import { CarousserieComponent } from './carousserie/carousserie.component';
import { ImgvehiculeComponent } from './imgvehicule/imgvehicule.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminComponent } from './admin.component';



@NgModule({
  declarations: [PaysComponent, MarqueComponent, ModelComponent, ModeleComponent, VersionComponent, CarburantComponent, TransmissionComponent, CarousserieComponent, ImgvehiculeComponent, DashboardComponent, AdminComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
