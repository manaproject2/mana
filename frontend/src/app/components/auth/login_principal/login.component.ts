import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http'; //To import the service
import  {Login} from "../../../models/login";
import {LoginService} from "../../../services/login.service";
import {ActivatedRoute , Router} from "@angular/router";
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  // public form = {
  //   email: null,
  //   password: null
  // };
  
  login: Login = {
    email: null,
    password: null,
    
   };

    

  constructor(private loginService :LoginService, 
     private activateRoute: ActivatedRoute, private router:Router , private Token : TokenService,
     private Auth: AuthService) {}

  //To create methods 
  // onSubmit(){
  //      //console.log(this.form);
  //     return this.http.post('url', this.form).subscribe(
  //       data => console.log(data),
  //       error => console.log(error),

  //     );

  // }

  public error = null;

  
  ngOnInit() {
  }

   LoginIn(){
    this.loginService.loginIn(this.login).subscribe(
      data => {
      console.log(data);
      this.handlResponse(data)
      
      
      
    }, (error) => {
      this.handleError(error)
      //alert('Querry faild');
    });
   }

   handlResponse(data: any){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStaus(true);
    this.router.navigateByUrl('/dashboard');  //To redirect to another component
    
  }

   handleError(error){
    this.error = error.error.error;
  }
  

}

