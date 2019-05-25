import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | 
  Observable<boolean> | Promise<boolean> {
  
   return this.Token.loggedIn();
  }
  constructor(private Token: TokenService,  private router:Router) { 
    console.log(this.Token.loggedIn());
  }
  
  
}
