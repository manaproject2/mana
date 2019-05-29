import { Component, OnInit } from '@angular/core';
import  {Signup} from '../../../../models/signup';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseResetService} from '../../../../services/response-reset.service';
import { SnotifyService } from 'ng-snotify';



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
    private route:ActivatedRoute, private respondeReset:ResponseResetService , private router : Router,
    private Notify: SnotifyService
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
      
    });
   }

   handlResponse(data){
    
    let _router = this.router;
    this.Notify.confirm('Done! , Now login with new password', {
      buttons:[
       {text: 'Okay',
       action: toaster =>{
         _router.navigateByUrl('/login'),
         this.Notify.remove(toaster.id)
       }
      },
      ]
    })    
    this.router.navigateByUrl('/login');
  }

  handleError(error){
    this.error = error.error.errors;
  }

  ngOnInit() {
  }

}
