import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogginComponent } from './loggin/loggin.component';
import { AuthentificationComponent } from './authentification.component';



@NgModule({
  declarations: [LogginComponent, AuthentificationComponent],
  imports: [
    CommonModule
  ]
})
export class AuthentificationModule { }
