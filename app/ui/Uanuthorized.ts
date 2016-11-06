import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
    selector: 'unauthorized',
    templateUrl: 'app/ui/Uanuthorized.htm'
})
export class Uanuthorized {
    constructor(private router: Router) {
    }
    message: string = "";
    doLogin() {
         this.router.navigateByUrl('login');
    }
}


