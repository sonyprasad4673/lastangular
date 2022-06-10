import { Component, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-medal-cell-renderer',
  templateUrl: './medal-cell-renderer.component.html',
  styleUrls: ['./medal-cell-renderer.component.sass']
})
export class MedalCellRendererComponent implements ICellRendererAngularComp {
  public displayValue!: string;

  agInit(params: ICellRendererParams): void {
    this.displayValue = new Array(parseInt(params.value, 10))
      .fill('#')
      .join('');
  }
  refresh(params: ICellRendererParams) {
    return false;
  }

}
