import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Versionimg } from '../models/versionimg.models';

@Injectable({
    providedIn: 'root'
})
export class VersionimgService {
    url = 'http://localhost:8000/api/versionimgs';
    versionimgs: Versionimg[];
    versionimg: Versionimg;
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
                this.versionimgs = res as Versionimg[];
            }
        
        );
    }

    post() {
        console.log(this.versionimg)
        return this.http.post(this.url, this.versionimg);
    }

    put() {
        return this.http.put(this.url + '/' + this.versionimg.id, this.versionimg);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.versionimg.id);
    }




}
