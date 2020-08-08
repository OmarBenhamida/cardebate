import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commantaire } from '../models/commantaire.models';

@Injectable({
    providedIn: 'root'
})
export class CommantaireService {
    url = 'http://localhost:8000/api/commantaires';
    commantaires: Commantaire[];
    commantaire: Commantaire;
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
                this.commantaires = res as Commantaire[];
            }
        );
    }

    post() {
        console.log(this.commantaire)
        return this.http.post(this.url, this.commantaire);
    }

    put() {
        return this.http.put(this.url + '/' + this.commantaire.id, this.commantaire);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.commantaire.id);
    }




}
