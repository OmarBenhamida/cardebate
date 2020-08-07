import { Injectable } from '@angular/core';
import {Compte} from 'src/app/models/Compte.models';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  user: Compte = null;

  constructor() { }
}
