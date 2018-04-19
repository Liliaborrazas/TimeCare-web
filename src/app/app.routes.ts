import { LoginComponent } from './components/misc/login/login.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';

import { Routes } from '@angular/router';
import { CreateComponent } from './components/event/create/create.component';
import { ListComponent } from './components/event/list/list.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';


export const routes: Routes =[
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'event/create', component: CreateComponent},
    { path: 'event/list', component: ListComponent},
    { path: 'profile',component: ProfileComponent},
    { path: 'user/:id', component: UserComponent},
    { path: 'user-list', component: UserListComponent},
    { path: '', redirectTo: 'home', pathMatch: 'full'}


];