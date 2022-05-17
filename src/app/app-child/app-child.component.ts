import {
  Component,
  Input,
  OnInit,
  OnChanges,
  SimpleChange,
  SimpleChanges,
  DoCheck,
} from '@angular/core';

@Component({
  selector: 'app-app-child',
  templateUrl: './app-child.component.html',
  styleUrls: ['./app-child.component.sass'],
})
export class AppChildComponent implements OnInit, OnChanges, DoCheck {
  @Input()
  myNumber!: number;

  constructor() {}

  ngOnChanges(changes: SimpleChanges) {
    const newNumberChange: SimpleChange = changes['myNumber'];
    console.log(
      'ngOnchange() -> previous Value: ',
      newNumberChange.previousValue
    );
    console.log(
      'ngOnchange() -> current Value: ',
      newNumberChange.currentValue
    );
  }

  ngOnInit() {
    console.log('ngOnInit() ->  Value: ', this.myNumber);
  }

  ngDoCheck() {
    console.log('ngDoCheck() ->  Value: ', this.myNumber);
  }

  //  its called only one time after ngDoCheck

  ngAfterContentInit() {
    console.log(
      'ngAfterContentInit() -> its called only once time after ngDoCheck'
    );
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked() -> its gets called evetry change');
  }

  ngAfterViewInit() {
    console.log(
      'ngAfterViewInit()  ->It gets called only once after ngAfterContentChecked'
    );
  }

  ngAfterViewChecked() {
    console.log(
      'ngAfterViewChecked()  -> It gets called every time after NgAfterViewInit'
    );
  }

  ngOnDestroy() {
    console.log('component has been destroyed !!!');
  }
}
