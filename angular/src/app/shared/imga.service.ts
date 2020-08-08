import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imga } from '../models/imga.models';

@Injectable({
    providedIn: 'root'
})
export class ImgaService {
    url = 'http://localhost:8000/api/imgas';
    imgas: Imga[];
    imga: Imga;
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
                this.imgas = res as Imga[];
            }
        );
    }

    post() {
        console.log(this.imga)
        return this.http.post(this.url, this.imga);
    }

    put() {
        return this.http.put(this.url + '/' + this.imga.id, this.imga);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.imga.id);
    }




}
