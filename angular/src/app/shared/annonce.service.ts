import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compte } from '../models/Compte.models';
import { Annonce } from '../models/annonce.models';

@Injectable({
    providedIn: 'root'
})
export class AnnonceService {
    url = 'http://localhost:8000/api/annonces';
    annonces: Annonce[];
    annonce: Annonce;
    user: Compte;
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
                this.annonces = res as Annonce[];
            }
        );
    }

    post() {
        console.log(this.annonce)
        return this.http.post(this.url, this.annonce);
    }

    put() {
        return this.http.put(this.url + '/' + this.annonce.id, this.annonce);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.annonce.id);
    }




}
