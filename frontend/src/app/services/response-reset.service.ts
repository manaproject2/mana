import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import  {Signup} from "../models/signup";
@Injectable({
  providedIn: 'root'
})
export class ResponseResetService {

  API_URI = 'http://localhost:8000/api/auth/';
  constructor(private http: HttpClient) { }

   
  changePassword(signup: Signup){
    const headers = new HttpHeaders({'content-type': 'application/json'});

    return this.http.post(this.API_URI + 'resetPassword', signup, {headers: headers});
   }

}
