import { Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';
import { Http, Response } from '@angular/http';
import { Contact } from '../models/contact-model';
import { Observable } from 'rxjs/Observable';
import { CustomHeaders } from './CustomHeaders';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class ApiService {
    _url = 'http://localhost:8080';
    welcomeUrl() {
        return this._url + "/api/welcome";
    }
    
    constructor(private http: Http) {        
    }
    welcome(headers: Headers): Observable<any> {
        console.log(JSON.stringify(headers));
        return this.http.get(this.welcomeUrl(),  { headers: headers })
            .map(this.extractData)
            .catch(this.handleError);
    }
    //#####################################################################    
    serialize(obj: any) {
        let str:any[] = [];
        for (var p in obj)
            if (obj.hasOwnProperty(p)) {
                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            }
        return str.join("&");
    }
    private extractData(res: Response) {
        console.log(JSON.stringify(res))
        let body = res.json();
        return body;
    }
    private handleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error_description|| JSON.stringify(body);
            //errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
            errMsg = err;
            
        } else {
            errMsg = error.error_description ? error.error_description : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}

