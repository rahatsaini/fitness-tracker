import { Component, OnInit,EventEmitter,Output, OnDestroy } from '@angular/core';
import {AuthServce} from '../../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth :Boolean = false;
  authSubscription : Subscription;
  @Output() sidenavToggle = new  EventEmitter<void>();
  constructor(private authservice:AuthServce) { 
    
    
  }
  


  ngOnInit() {
   this.authSubscription =   this.authservice.authChange.subscribe(authstatus=> {
      this.isAuth = authstatus;
    })
  }

  ontogglesidenav(){
     this.sidenavToggle.emit();
  }

  ngOnDestroy(){
    this.authSubscription.unsubscribe();
  }

}
