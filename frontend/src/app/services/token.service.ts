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

  handle(Token){
  
    this.set(Token);
  
    console.log(this.isValid())
  }

  //To set the token to authenticate user 
  set(token) {
    
    localStorage.setItem('token' , token)
  }

  get(){
    return localStorage.getItem('token');
  }

  remove(){
    return localStorage.removeItem('token');
  }

  isValid(){
    const token = this.get();
   if (token) {
     const payload = this.payload(token);
     if(payload){
       return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
     }
   }
   return false;
  }

  payload(token:any){
    const payload =  token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload)
  {
    return JSON.parse(atob(payload));
  }

  loggedIn(){
    return this.isValid();
  }

  

}
