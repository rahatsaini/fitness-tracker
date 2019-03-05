import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newtraining',
  templateUrl: './newtraining.component.html',
  styleUrls: ['./newtraining.component.css']
})
export class NewtrainingComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onStartTraining() {
    this.trainingStart.emit();
  }

}
