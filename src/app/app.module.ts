import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler  } from '@angular/core';
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
import { CreateComponent } from './components/event/create/create.component';
import { ListComponent } from './components/event/list/list.component';
import { AboutComponent } from './components/about/about.component';
import { EventService } from './shared/services/event.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ SessionService, 
  UsersService, EventService,
  {
    provide: ErrorHandler,
    useClass: GlobalErrorHandlerService
  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
