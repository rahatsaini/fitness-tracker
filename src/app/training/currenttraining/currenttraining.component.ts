import { Component, OnInit,EventEmitter,Output} from '@angular/core';
import { timingSafeEqual } from 'crypto';
import { MatDialog } from '@angular/material';
import { StopTrainingComponent } from './stoptraining.component';
import { EventManager } from '@angular/platform-browser';

@Component({
  selector: 'app-currenttraining',
  templateUrl: './currenttraining.component.html',
  styleUrls: ['./currenttraining.component.css']
})
export class CurrenttrainingComponent implements OnInit {
  @Output() trainingExit= new EventEmitter();
  progress =0;
  timer : number;
  constructor(private dialog:MatDialog) { }

  ngOnInit() {
   this.ontimerstart();
  }

  ontimerstart(){
    this.timer = setInterval(()=>{
      this.progress = this.progress +10;
      if(this.progress >= 100)
         clearInterval(this.timer);
      },1000);
  }

  onStop(){
    clearInterval(this.timer);
    const dialoReg =  this.dialog.open(StopTrainingComponent, {
      data:{
        progress:this.progress
      }
    });

    dialoReg.afterClosed().subscribe(result=>{
      if(result)
      {
        this.trainingExit.emit();
      }
      else 
      this.ontimerstart();
    }

    )
  }
}
