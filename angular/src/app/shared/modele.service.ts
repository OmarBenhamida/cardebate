import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Modele } from '../models/modele.models';

@Injectable({
    providedIn: 'root'
})
export class ModeleService {
    url = 'http://localhost:8000/api/modeles';
    modeles: Modele[];
    modele: Modele;
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
                this.modeles = res as Modele[];
            }
        );
    }

    post() {
        console.log(this.modele)
        return this.http.post(this.url, this.modele);
    }

    put() {
        return this.http.put(this.url + '/' + this.modele.id, this.modele);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.modele.id);
    }




}
