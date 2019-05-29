import { Component, OnInit } from '@angular/core';
import  {Login} from "../../../../models/login"
import { LoginService } from 'src/app/services/login.service';
import {  SnotifyService } from 'ng-snotify';

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
  private notify: SnotifyService,
  private Notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  sendPasswordReset(){
    
    this.Notify.info('Wait...' , {timeout:5000})
    this.loginService.sendPasswordResetLink(this.login).subscribe(
      data => {
      
      this.handlResponse(data)
  
      }, (error) => {
       this.notify.error(error.error.error)
     
    });
  
  }

  handlResponse(res){
    
    this.Notify.success(res.data,{timeout:0});
    this.login.email = null;
    
  }
}




