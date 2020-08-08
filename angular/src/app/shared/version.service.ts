import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Version } from '../models/version.models';

@Injectable({
    providedIn: 'root'
})
export class VersionService {
    url = 'http://localhost:8000/api/versions';
    versions: Version[];
    version: Version;
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
                this.versions = res as Version[];
            }
        );
    }

    post() {
        console.log(this.version)
        return this.http.post(this.url, this.version);
    }

    put() {
        return this.http.put(this.url + '/' + this.version.id, this.version);
    }

    delete() {

        return this.http.delete(this.url + '/' + this.version.id);
    }




}
