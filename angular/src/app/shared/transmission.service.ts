import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transmission } from '../models/transmission.models';

@Injectable({
    providedIn: 'root'
})
export class TransmissionService {
    url = 'http://localhost:8000/api/transmissions';
    transmissions: Transmission[];
    transmission: Transmission;
    constructor(private http: HttpClient) { }

    get(id) {
        return this.http.get(this.url + '/' + id);

    }

    getall() {
        return this.http.get(this.url + '/getAll');
     }

    getall2() {
        this.http.get(this.url).toPromise().then( 
            res => {
                this.transmissions = res as Transmission[];
            }
        );
    }

    post() {
        console.log(this.transmission)
        return this.http.post(this.url, this.transmission);
    }

    put() {
        return this.http.put(this.url + '/' + this.transmission.id, this.transmission);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.transmission.id);
    }




}
