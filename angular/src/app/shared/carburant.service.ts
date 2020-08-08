import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carburant } from '../models/carburant.models';

@Injectable({
    providedIn: 'root'
})
export class CarburantService {
    url = 'http://localhost:8000/api/carburants';
    carburants: Carburant[];
    carburant: Carburant;
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
                this.carburants = res as Carburant[];
            }
        );
    }

    post() {
        console.log(this.carburant)
        return this.http.post(this.url, this.carburant);
    }

    put() {
        return this.http.put(this.url + '/' + this.carburant.id, this.carburant);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.carburant.id);
    }




}
