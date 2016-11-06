import { Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class CustomHeaders {
    client_id:string="springapp";
    client_secret:string="B@#BH!@#";
    token:string="none";
    setToken(t:string){
        this.token=t;
    }
    getToken(){
        return this.token;
    }
    
    getHeadersForLoginRequest() {
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        headers.append('Authorization', 'Basic ' + btoa(this.client_id+':'+this.client_secret));
        return headers;
    }
    getHeadersForApiRequest() {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.token);
        return headers;
    }
}