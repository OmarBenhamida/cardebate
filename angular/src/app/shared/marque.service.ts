import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marque } from '../models/marque.models';

@Injectable({
    providedIn: 'root'
})
export class MarqueService {
    url = 'http://localhost:8000/api/marques';
    marques: Marque[];
    marque: Marque;
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
                this.marques = res as Marque[];
            }
        );
    }

    post() {
        console.log(this.marque)
        return this.http.post(this.url, this.marque);
    }

    put() {
        return this.http.put(this.url + '/' + this.marque.id, this.marque);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.marque.id);
    }




}
