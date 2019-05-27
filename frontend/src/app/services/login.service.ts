import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import { Observable } from 'rxjs';
import  {Login} from "../models/login";
@Injectable({
  providedIn: 'root'
})


export class LoginService {

  API_URI = 'http://localhost:8000/api/auth/';
  
  //I instanced the module httpClient

  constructor(private http: HttpClient) { }

  // loginIn(login: Login){
  //   return this.http.post(`${this.API_URI}/login`, game);
  // }

  loginIn(login: Login){
    const headers = new HttpHeaders({'content-type': 'application/json'});

    return this.http.post(this.API_URI + 'login', login, {headers: headers});
   }

   sendPasswordResetLink(login: Login){
    const headers = new HttpHeaders({'content-type': 'application/json'});  
    return this.http.post(this.API_URI + 'sendPasswordResetLink', login, {headers: headers , responseType:'text'});
   }

  }