import { Component, OnInit,EventEmitter,Output,OnDestroy } from '@angular/core';
import {AuthServce} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
import { timingSafeEqual } from 'crypto';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 @Output() CloseSideNav = new EventEmitter();
 isAuth:boolean = false;
  subscription : Subscription;


  constructor(private authService : AuthServce) { }

  ngOnInit() {
    this.subscription = this.authService.authChange.subscribe( authStatus =>{
      this.isAuth =  authStatus;
    })
  }
 
 onlogout(){
   this.onclose();
   this.authService.logout();
 }

  onclose(){
    this.CloseSideNav.emit();
    this.subscription.unsubscribe();
  }
}
