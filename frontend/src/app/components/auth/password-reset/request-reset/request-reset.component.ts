import { Component, OnInit } from '@angular/core';
import  {Login} from "../../../../models/login"
import { LoginService } from 'src/app/services/login.service';
import { SnotifyModule } from 'ng-snotify';

@Component({
  selector: 'app-request-reset',
  templateUrl: './request-reset.component.html',
  styleUrls: ['./request-reset.component.css']
})
export class RequestResetComponent implements OnInit {


  login: Login = {
    email: null,
    password: null,
    };
  
  constructor(
  private loginService: LoginService,
  private notify: SnotifyModule
  ) { }

  ngOnInit() {
  }

  sendPasswordReset(){
    
    this.loginService.sendPasswordResetLink(this.login).subscribe(
      data => {
      
      this.handlResponse(data);
  
      }, (error) => {
       this.notify.error
      //alert('Querry faild');
    });
  
  }

  handlResponse(res){
    // this.login.email = null
    // this.Token.handle(data.access_token);
    // this.Auth.changeAuthStaus(true);
    // this.router.navigateByUrl('/dashboard');  //To redirect to another component
    
  }
}




