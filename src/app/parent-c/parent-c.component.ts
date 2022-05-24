import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-c',
  templateUrl: './parent-c.component.html',
  styleUrls: ['./parent-c.component.sass'],
})
export class ParentCComponent implements OnInit {
  currentBeverage = 'Coffee';
  beverage = ['milk', 'tea', 'coffee', 'juice'];

  name = 'Prasad';
  disabled = false;

  title: string = 'this is Durga';

  title1: string = 'Property Binding';

  allowNewuser = false;

  userCreatedStatus = 'No User is Created';

  changeUserCreatedStatus() {
    this.userCreatedStatus = 'User is created';
  }

  addBeverage(newBeverage?: any) {
    console.log('============>parent', newBeverage);

    this.beverage.push(newBeverage);
  }

  constructor() {
    setTimeout(() => {
      this.allowNewuser = true;
    });
  }

  ngOnInit(): void {}
}
