import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/auth/login_principal/login.component';
import { SignupComponent } from './components/auth/signup/signup.component';
import { DashboardComponent } from './components/auth/dashboard/dashboard.component';
import { RequestResetComponent } from './components/auth/password-reset/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/auth/password-reset/response-reset/response-reset.component';
import { HomeComponent } from './components/home/home.component';

// const appRoutesAuth: Routes = [
  
//   {
//     path:'',
//     component:HomeComponent 
//   },

//   {
//     path:'home',
//     component:HomeComponent 
//   },
  
//   {
//     path:'login',
//     component:LoginComponent 
//   },

//   {
//     path:'signup',
//     component:SignupComponent 
//   },
//   {
//     path:'dashboard',
//     component:DashboardComponent 
//   },
//   {
//     path:'request-password-reset',
//     component:RequestResetComponent 
//   },
//   {
//     path:'response-password-reset',
//     component:ResponseResetComponent 
//   },
// ];



@NgModule({
  //imports: [RouterModule.forRoot(appRoutesAuth)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
