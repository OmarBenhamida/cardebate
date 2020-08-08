import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousserie } from '../models/carousserie.models';

@Injectable({
    providedIn: 'root'
})
export class CarousserieService {
    url = 'http://localhost:8000/api/carousseries';
    carousseries: Carousserie[];
    carousserie: Carousserie;
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
                this.carousseries = res as Carousserie[];
            }
        );
    }

    post() {
        console.log(this.carousserie)
        return this.http.post(this.url, this.carousserie);
    }

    put() {
        return this.http.put(this.url + '/' + this.carousserie.id, this.carousserie);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.carousserie.id);
    }




}
