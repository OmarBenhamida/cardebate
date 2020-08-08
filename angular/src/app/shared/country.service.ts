import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from '../models/country.models';

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    url = 'http://localhost:8000/api/countrys';
    countrys: Country[];
    country: Country;
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
                this.countrys = res as Country[];
            }
        );
    }

    post() {
        console.log(this.country)
        return this.http.post(this.url, this.country);
    }

    put() {
        return this.http.put(this.url + '/' + this.country.id, this.country);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.country.id);
    }




}
