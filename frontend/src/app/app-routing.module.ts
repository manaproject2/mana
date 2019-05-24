import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login_principal/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { RequestResetComponent } from './components/auth/password-reset/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password-reset/response-reset/response-reset.component';
import { HomeComponent } from './components/home/home.component';
import { BeforeLoginService } from './services/canDeactive/before-login.service';
import { AfterLoginService } from './services/canDeactive/after-login.service';
import { AuthGuard } from './auth/guard/auth.guard';
import { AfterloginGuard } from './auth/guard/afterlogin.guard';

const routes: Routes = [ 
  {path: '', component: HomeComponent,},
  {path: 'home', component: HomeComponent , canActivate : [AuthGuard]},
  {path:'login',component:LoginComponent , canActivate : [AuthGuard]},  
  {path:'signup',component:SignupComponent , canActivate : [AuthGuard]},   
  {path:'dashboard',component:DashboardComponent , canActivate : [AfterloginGuard]}, 
  {path:'request-password-reset',component:RequestResetComponent , canActivate : [AfterLoginService]},
  {path:'response-password-reset',component:ResponseResetComponent, canActivate : [AfterLoginService]},
];
@NgModule({
  imports: [RouterModule.forRoot(routes),

 ],
  
  exports: [RouterModule]
})
export class AppRoutingModule { }
