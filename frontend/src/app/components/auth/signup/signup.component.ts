import { Component, OnInit } from '@angular/core';
import  {Signup} from "../../../models/signup";
import {SignupService} from "../../../services/signup/signup.service";
import {ActivatedRoute , Router} from "@angular/router";

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

  
  constructor(private signupService :SignupService,  private activateRoute: ActivatedRoute, private router:Router  ) {}
  ngOnInit() {
  }

  singUp(){
    this.signupService.singUp(this.signup).subscribe((data) => {
      this.router.navigate(['/'])  //To redirect to another component
      console.log(data);
      
    }, (error) => {
      this.handleError(error)
      alert('Querry faild');
    });
   }

   handleError(error){
    this.error = error.error.errors;
  }

}
