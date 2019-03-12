import {CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router'
import { Injectable } from '@angular/core';
import { AuthServce } from './auth.service';


@Injectable()
export class AuthGuard implements CanActivate {
   constructor(private authservice:AuthServce, private router :Router){

   }

    canActivate(route:ActivatedRouteSnapshot , state:RouterStateSnapshot){
        if(this.authservice.isAuth())
          return true;
          else
           this.router.navigate(["/login"]);
          
    }

}