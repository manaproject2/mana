import { Component, OnInit } from '@angular/core';
//import { HttpClient } from 'selenium-webdriver/http';
import {HttpClient} from '@angular/common/http'; //To import the service
import  {Login} from "../../../models/login";
import {LoginService} from "../../../services/login.service";
import {ActivatedRoute , Router} from "@angular/router";


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

  constructor(private loginService :LoginService,  private activateRoute: ActivatedRoute, private router:Router  ) {}

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
    this.loginService.loginIn(this.login).subscribe((data) => {
      this.router.navigate(['/'])  //To redirect to another component
      console.log(data);
      
    }, (error) => {
      this.handleError(error)
      //alert('Querry faild');
    });
   }

   handleError(error){
    this.error = error.error.error;
  }
  

}

