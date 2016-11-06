import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/ApiService';
import { CustomHeaders } from '../../services/CustomHeaders';
import {Router} from '@angular/router';

@Component({
    selector: 'resource-welcome',
    templateUrl: 'app/ui/resource/Welcome.htm'
})
export class Welcome implements OnInit {
    ngOnInit() {
        this.doGet();
    }
    constructor(private apiService: ApiService, private customHeaders: CustomHeaders,private router: Router) {
    }
    message: string = "";
    doGet() {
        this.apiService.welcome(this.customHeaders.getHeadersForApiRequest())
            .subscribe(
            body => {
                this.message = <any>body.message;
            },
            error => {
                this.message = <any>error;
                this.router.navigateByUrl('unauthorized');
            });
    }
}


