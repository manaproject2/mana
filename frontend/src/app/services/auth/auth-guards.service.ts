import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot , RouterStateSnapshot , Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardsService implements CanActivate{
  canActivate(route: ActivatedRouteSnapshot , state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    return true;
  }




  constructor() { }
}
