import { GlobalErrorHandlerService } from './shared/services/global-error-handler.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler  } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AgmCoreModule } from '@agm/core';

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

//angular material//

import { MatToolbarModule } from '@angular/material/toolbar';
import { MapsComponent } from './components/maps/maps.component';

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
    MapsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAPqHxHanh7ubcz29nbXo45QFSY3RQ7pPw',
      libraries: ['places'] 
    })
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
