import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-total-value-renderer',
  templateUrl: './total-value-renderer.component.html',
  styleUrls: ['./total-value-renderer.component.sass']
})
export class TotalValueRendererComponent implements OnInit,ICellRendererAngularComp {

  public cellValue!: string;

   // gets called once before the renderer is used
   agInit(params: ICellRendererParams): void {
    this.cellValue = this.getValueToDisplay(params);
      }
      // gets called whenever the user gets the cell to refresh
  refresh(params: ICellRendererParams) {
    // set value into cell again
    this.cellValue = this.getValueToDisplay(params);
    return true;
  }

  buttonClicked() {
    alert(`${this.cellValue} medals won!`);
  }

  getValueToDisplay(params: ICellRendererParams) {
    return params.valueFormatted ? params.valueFormatted : params.value;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
