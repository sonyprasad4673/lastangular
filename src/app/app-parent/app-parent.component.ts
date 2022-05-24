import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-parent',
  templateUrl: './app-parent.component.html',
  styleUrls: ['./app-parent.component.sass'],
})
export class AppParentComponent implements OnInit {
  private myNumber: number = 25;
  isVisible: boolean = true;

  get counter() {
    return this.myNumber;
  }

  set counter(value) {
    this.myNumber = value;
  }

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

  switchVisibility() {
    this.isVisible = !this.isVisible;
  }

  ngOnInit(): void {}
}
