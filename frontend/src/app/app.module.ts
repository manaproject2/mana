import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { LoginComponent } from './components/auth/login_principal/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { RequestResetComponent } from './components/auth/password-reset/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password-reset/response-reset/response-reset.component';
import {HttpClientModule} from '@angular/common/http'; //To import the service
import { LoginService } from './services/login.service';
import { SignupService } from './services/signup/signup.service';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    LoginService,
    SignupService
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
