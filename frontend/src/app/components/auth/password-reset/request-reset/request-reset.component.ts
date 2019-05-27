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
  private notify: SnotifyService
  ) { }

  ngOnInit() {
  }

  sendPasswordReset(){
    
    this.loginService.sendPasswordResetLink(this.login).subscribe(
      data => {
      
      this.handlResponse(data);
  
      }, (error) => {
       this.notify.error(error.error.error)
      //alert('Querry faild');
    });
  
  }

  handlResponse(res){
    console.log(res)
    this.login.email = null;
    
  }
}




