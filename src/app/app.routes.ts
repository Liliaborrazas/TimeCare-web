import { LoginComponent } from './components/misc/login/login.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { HomeComponent } from './components/home/home.component';


import { Routes } from '@angular/router';
import { FormComponent } from './components/event/form/form.component';
import { ListComponent } from './components/event/list/list.component';




export const routes: Routes =[
    { path: 'home', component: HomeComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'event/form', component: FormComponent},
    { path: 'event/list', component: ListComponent}



];