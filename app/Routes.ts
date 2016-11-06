////////////////////////////////////////////////////////////////////
import { Login } from './ui/auth/Login';
import { Register } from './ui/auth/Register';
import { Welcome } from './ui/resource/Welcome';
import { Uanuthorized } from './ui/Uanuthorized';


////////////////////////////////////////////////////////////////////
import { Home } from './ui/Home';
export const routes = [
    { path: '', component: Login },
    { path: 'login', component: Login },
    { path: 'unauthorized', component:  Uanuthorized },
    { path: 'welcome', component: Welcome }
    
    
];
