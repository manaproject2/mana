import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  private iss = {
    login : 'http://localhost:8000/api/login',
    signup :'http://localhost:8000/api/signup'
  };

  constructor() { }

  handle(token){
  
    this.set(token);
   
  }

  //To set the token to authenticate user 
  set(token: any) {
    
    localStorage.setItem('token' , token)
    console.log(token);
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    return localStorage.removeItem('token');
  }

 
  isValid(){
    const Token = this.get();
    console.log(Token);
    if(Token){
      const payload = this.payload(Token);
      if(payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
  }

  payload(token: any){
    const payload =  token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    if(localStorage.getItem('token') != null )
      return true;
     }
  }
