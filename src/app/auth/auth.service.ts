import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { PassThrough } from 'stream';
import {Subject} from 'rxjs'


export class AuthServce{
    private user:User;

    authChange = new Subject<boolean>();
    registerUser(authdata:AuthData)
    {
        this.user ={
            email: authdata.email,
            userID : Math.round(Math.random()*10000).toString()
        };
        this.authChange.next(true);
    }

    login(authData:AuthData)
    {
        this.user ={
            email: authData.email,
            userID : Math.round(Math.random()*10000).toString()
        };
        this.authChange.next(true);
    }
   logout(){
      this.user = null; 
      this.authChange.next(false);
   }
   getuser(){
      return {...this.user};
   }
   isAuth(){
       return this.user != null;
   }
}