import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.sass'],
})
export class ParentCComponent implements OnInit {
  currentBeverage = 'Coffee';
  beverage = ['milk', 'tea', 'coffee', 'juice'];

  addBeverage(newBeverage?: any) {
    console.log('============>parent', newBeverage);

    this.beverage.push(newBeverage);
  }

  constructor() {}

  ngOnInit(): void {}
}
