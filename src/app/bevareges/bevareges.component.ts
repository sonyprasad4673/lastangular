import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bevareges',
  templateUrl: './bevareges.component.html',
  styleUrls: ['./bevareges.component.sass'],
})
export class BevaregesComponent implements OnInit {
  @Input() bevarege = 'tea';
  @Output() newBevaregsEvent = new EventEmitter<string>();
  inpText!: string;

  title: string = 'this is Durga';

  constructor() {}

  ngOnInit(): void {}

  addNewBevareges() {
    console.log('=====this.inpText', this.inpText);

    this.newBevaregsEvent.emit(this.inpText);
  }

  // eventHandler(event: any) {
  // console.log(event.target.value);
  // this.inpText = event.target.value;
  // }
  // }
}
