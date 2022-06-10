import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll',
  templateUrl: './scroll.component.html',
  styleUrls: ['./scroll.component.sass']
})
export class ScrollComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    for(let i=1; i<=100; i++) {
      this.Prasad.push(i)

    }
    console.log(this.Prasad)
  }

  Prasad : any = []; // varaiable  1-100
  onScroll() {
    const length = this.Prasad.length;  //100 {1 , 2 -100}
    setTimeout(() =>{
    const p : any = ' '.repeat(100).split('').map((s,i) => i + 1 + length);
    while(p.length) this.Prasad.push(p.shift());
    }, 1000); //set time for 1000 milli second
  }

}
