import { Component, OnInit } from '@angular/core';
import  {Signup} from '../../../../models/signup';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseResetService} from '../../../../services/response-reset.service';



@Component({
  selector: 'app-response-reset',
  templateUrl: './response-reset.component.html',
  styleUrls: ['./response-reset.component.css']
})
export class ResponseResetComponent implements OnInit {

  public error = [];
  signup: Signup = {
    nombre: null,
    email: null,
    password: null,
    password_confirmation: null,
    email_verified: null,
    resetToken: null
    };
  
  constructor(
    private route:ActivatedRoute, private respondeReset:ResponseResetService , private router : Router
  ) { 
    route.queryParams.subscribe(params => {
      this.signup.resetToken = params['token']
    });
  }

  resetPassword(){
    this.respondeReset.changePassword(this.signup).subscribe(
      data => {
      this.handlResponse(data)
      
    }, (error) => {
      this.handleError(error)
      alert('Querry faild');
    });
   }

   handlResponse(data){
        
    this.router.navigateByUrl('/login');
  }

  handleError(error){
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
