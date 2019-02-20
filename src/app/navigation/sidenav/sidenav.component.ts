import { Component, OnInit,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

 @Output() CloseSideNav = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
 
  onclose(){
    this.CloseSideNav.emit();
  }
}
