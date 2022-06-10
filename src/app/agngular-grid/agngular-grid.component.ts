import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, ICellRendererAngularComp } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, ColGroupDef, GridReadyEvent, GridApi, ValueGetterParams, RowGroupingDisplayType, ICellRendererParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { AgGridModule } from 'ag-grid-angular';
import 'ag-grid-enterprise';
import { TotalValueRendererComponent } from '../total-value-renderer/total-value-renderer.component';
import { MedalCellRendererComponent } from '../medal-cell-renderer/medal-cell-renderer.component';

@Component({
  selector: 'app-agngular-grid',
  templateUrl: './agngular-grid.component.html',
  styleUrls: ['./agngular-grid.component.sass']
})
export class AgngularGridComponent implements OnInit, ICellRendererAngularComp {
  title = "AG-Grid";

  @ViewChild('agGrid') agGrid: any;


  private gridApi!: GridApi;
  private frameworkComponents: any;
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  ngOnInit(): void {
  }
  public columnDefs: (ColDef | ColGroupDef)[] = [
    {
      field: 'athlete', cellRenderer: 'btnCellRenderer',
      cellRendererParams: {
        clicked: function (field: any) {
          alert(`${field} was clicked`);
        }
      }
    },
    { field: 'age', maxWidth: 90, cellRenderer: "customizedAgeCell" },
    { field: 'country' },
    { field: 'year' },
    { field: 'date' },
    { field: 'sport' },
    { field: 'gold', },
    { field: 'silver' },
    { field: 'bronze', cellRenderer: MedalCellRendererComponent },
    { field: 'total', minWidth: 175, cellRenderer: TotalValueRendererComponent },


  ];


  public autoGroupColumnDef: ColDef = {
    flex: 1,
    minWidth: 180,
    filterValueGetter: (params: ValueGetterParams) => params.data.country,
  };

  public defaultColDef: ColDef = {
    sortable: true,
    // filter: true,
    resizable: true,
    floatingFilter: true,
    minWidth: 90,
    flex: 1,
    editable: true,
  };

  public groupDisplayType: RowGroupingDisplayType = 'singleColumn';

  // Data that gets displayed in the grid
  public rowSelection = 'multiple';
  //public rowSelection = 'single';
  public rowData!: any[];
  public paginationPageSize = 15;
  public cacheBlockSize = 10;


  constructor(private http: HttpClient) { }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }

  onBtExport() {
    this.gridApi.exportDataAsExcel();
  }

  onBtnExportCsv() {
    this.gridApi.exportDataAsCsv();
  }
  btnClickedHandler() {
    this.params.clicked(this.params.value);
  }


  onFilterTextBoxChanged() {
    this.gridApi.setQuickFilter(
      (document.getElementById('filter-text-box') as HTMLInputElement).value
    );
  }


  onSelectionChanged() {
    var selectedRows = this.gridApi.getSelectedRows();
    var selectedRowsString = '';
    var maxToShow = 5;
    selectedRows.forEach(function (selectedRow, index) {
      if (index >= maxToShow) {
        return;
      }
      if (index > 0) {
        selectedRowsString += ', ';
      }
      selectedRowsString += selectedRow.athlete;
    });
    if (selectedRows.length > maxToShow) {
      var othersCount = selectedRows.length - maxToShow;
      selectedRowsString +=
        ' and ' + othersCount + ' other' + (othersCount !== 1 ? 's' : '');
    }
    (document.querySelector(
      '#selectedRows'
    ) as any).innerHTML = selectedRowsString;
  }




  onGridReady(params: GridReadyEvent) {
    this.gridApi = params.api;


    this.http
      .get<any[]>(
        'https://www.ag-grid.com/example-assets/olympic-winners.json'
      )
      .subscribe((data) => {
        (this.rowData = data);
      }
      );
  }
}
