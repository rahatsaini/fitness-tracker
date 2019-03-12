import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { PassThrough } from 'stream';

export class AuthServce{
    private user:User;

    registerUser(authdata:AuthData)
    {
        this.user ={
            email: authdata.email,
            userID : Math.round(Math.random()*10000).toString()
        };
    }

    login(authData:AuthData)
    {
        this.user ={
            email: authData.email,
            userID : Math.round(Math.random()*10000).toString()
        };
    }
   logout(){
      this.user = null; 
   }
   getuser(){
      return {...this.user};
   }
   isAuth(){
       return this.user != null;
   }
}