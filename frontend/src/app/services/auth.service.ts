import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

private loggeIn = new  BehaviorSubject<boolean>(this.Token.loggedIn())
authStatus = this.loggeIn.asObservable();

changeAuthStaus(value: boolean){
  this.loggeIn.next(value)
  console.log("ChanngeStatus" + value);
  alert('Auth fallo');
  }

  constructor( private Token:TokenService) { }
}