import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../models/compte.models';

@Injectable({
    providedIn: 'root'
})
export class CompteService {
    url = 'http://localhost:8000/api/comptes';
    comptes: Compte[];
    compte: Compte;
    constructor(private http: HttpClient) { }

    // RemplirTableau() {

    //   return this.http.get(this.url + '/RemplirTableau').toPromise().then(
    //     res => {
    //       this.oms = res as Diplome[];
    //       console.log(res);
    //     }
    //   );
    // }



    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    getall2() {
        this.http.get(this.url).toPromise().then( 
            res => {
                this.comptes = res as Compte[];
            }
        );
    }

    post() {
        console.log(this.compte)
        return this.http.post(this.url, this.compte);
    }

    put() {
        return this.http.put(this.url + '/' + this.compte.id, this.compte);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.compte.id);
    }




}