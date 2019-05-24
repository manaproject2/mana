import { Component, OnInit } from '@angular/core';
import  {Signup} from "../../../models/signup";
import {SignupService} from "../../../services/signup/signup.service";
import {ActivatedRoute , Router} from "@angular/router";
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signup: Signup = {
   nombre: null,
   email: null,
   email_verified: null,
   password: null,
   password_confirmation: null,
  };
  public error = [];

  
  constructor(private signupService :SignupService,  private activateRoute: ActivatedRoute, private router:Router, private Token: TokenService , private Auth: AuthService)  {}
  ngOnInit() {
  }

  singUp(){
    this.signupService.singUp(this.signup).subscribe(
      data => {
      this.handlResponse(data)
      
      console.log(data);
      
    }, (error) => {
      this.handleError(error)
      alert('Querry faild');
    });
   }

   handlResponse(data){
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStaus(true);
    this.router.navigateByUrl('/dashboard');  //To redirect to another component
  }

   handleError(error){
    this.error = error.error.errors;
  }

}
