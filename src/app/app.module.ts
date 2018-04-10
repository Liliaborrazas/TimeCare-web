import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import './rxjs.operators';

import { SessionService } from './shared/services/session.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/misc/login/login.component';
import { SignupComponent } from './components/misc/signup/signup.component';
import { routes } from './app.routes';
import { UsersService } from './shared/services/users.service';
import { NavbarComponent } from './components/misc/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FormComponent } from './components/event/form/form.component';
import { ListComponent } from './components/event/list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    FormComponent,
    ListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SessionService, 
  UsersService, ],
  bootstrap: [AppComponent]
})
export class AppModule { }
