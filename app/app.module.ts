import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { routes } from './Routes';
///////////////////////////////////////////
import { Dashboard } from './ui/dashboard';
import { Home } from './ui/Home';
///////////////////////////////////////////////////////
import { Login } from './ui/auth/Login';
import { Register } from './ui/auth/Register';
///////////////////////////////////////////////////////
import { Welcome } from './ui/resource/Welcome';
import { Uanuthorized } from './ui/Uanuthorized';


///////////////////////////////////////////////////////////
import { CustomHeaders } from './services/CustomHeaders';
import { AuthService } from './services/AuthService';
import { ApiService } from './services/ApiService';


@NgModule({
    imports: [BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(routes)],
    declarations: [
        AppComponent,
        Home,
        Dashboard,
        Login,
        Register,
        Welcome,
        Uanuthorized
    ],
    providers: [
        CustomHeaders,
        AuthService,
        ApiService

    ],
    bootstrap: [AppComponent, []]
})
export class AppModule { }
