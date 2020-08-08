import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Imgv } from '../models/imgv.models';

@Injectable({
    providedIn: 'root'
})
export class ImgvService {
    url = 'http://localhost:8000/api/imgvs';
    imgvs: Imgv[];
    imgv: Imgv;
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
                this.imgvs = res as Imgv[];
            }
        );
    }

    post() {
        console.log(this.imgv)
        return this.http.post(this.url, this.imgv);
    }

    put() {
        return this.http.put(this.url + '/' + this.imgv.id, this.imgv);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.imgv.id);
    }




}
