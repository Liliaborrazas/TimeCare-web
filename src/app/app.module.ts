import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import './rxjs.operators';

import { SessionService } from './shared/services/session.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/misc/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ SessionService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
