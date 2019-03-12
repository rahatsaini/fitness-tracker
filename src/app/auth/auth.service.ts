import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { PassThrough } from 'stream';
import {Subject} from 'rxjs'
import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';


@Injectable()
export class AuthServce{

  constructor(private  router :Router){
     
  }
    private user:User;

    authChange = new Subject<boolean>();
    registerUser(authdata:AuthData)
    {
        this.user ={
            email: authdata.email,
            userID : Math.round(Math.random()*10000).toString()
        };
        this.onsuccessfulLogin();
    }

    login(authData:AuthData)
    {
        this.user ={
            email: authData.email,
            userID : Math.round(Math.random()*10000).toString()
        };
        this.onsuccessfulLogin();
        
    }
   logout(){
      this.onLogout();
   }
   getuser(){
      return {...this.user};
   }
   isAuth(){
       return this.user != null;
   }
   onsuccessfulLogin(){
     this.router.navigate(["/training"])  ;
    this.authChange.next(true);
   }
   onLogout(){
       this.router.navigate(["/login"]);
       this.user = null; 
       this.authChange.next(false);
       
}
}