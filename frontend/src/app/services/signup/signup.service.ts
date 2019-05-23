import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'; // this module makes the petition HTTP TO ASK FOR INFO
import { Observable } from 'rxjs';
import  {Signup} from "../../models/signup";

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  API_URI = 'http://localhost:8000/api/auth/';
  
  //I instanced the module httpClient

  constructor(private http: HttpClient) { }

  singUp(signup: Signup){
    const headers = new HttpHeaders({'content-type': 'application/json'});

    return this.http.post(this.API_URI + 'signup', signup, {headers: headers});
   }


}
