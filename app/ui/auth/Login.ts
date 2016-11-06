import { Component } from '@angular/core';
import { AuthService } from '../../services/AuthService';
import { CustomHeaders } from '../../services/CustomHeaders';
import {Router} from '@angular/router';

@Component({
    selector: 'auth-login',
    templateUrl: 'app/ui/auth/Login.htm'
})
export class Login {
    constructor(private authService: AuthService, private customHeaders: CustomHeaders,private router: Router) {

    }
    message: string = "";
    model: any = { username: "", password: "" };
    errors: any = { username: "", password: "" };
    doLogin() {
        this.authService.login(this.model.username, this.model.password)
            .subscribe(
            body => {
                this.message='';
                this.customHeaders.setToken(body.access_token);
                console.log(this.customHeaders.getToken());
                this.router.navigateByUrl('welcome');
            },
            error => this.message = <any>error);
    }
}

