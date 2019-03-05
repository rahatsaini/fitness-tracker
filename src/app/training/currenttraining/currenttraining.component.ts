import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class CurrenttrainingComponent implements OnInit {
  
  progress =0;
  constructor() { }

  ngOnInit() {
    setInterval(()=>{
    this.progress = this.progress +10;
    },1000)
  }

}
