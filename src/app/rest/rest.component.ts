import { Component, OnInit } from '@angular/core';

import { response } from 'express';
import { Users } from 'users';
import { RestService } from '../rest.service';
import {
  ColDef,
  ColGroupDef,
  GridApi,
  GridReadyEvent,
} from 'ag-grid-community';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.sass']
})
export class RestComponent implements OnInit {
  
  users: Users[] = [];
  firstName: any;
  p: number = 1;
  private gridApi!: GridApi;

  


  constructor(public rs: RestService, http: HttpClient) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })
  }

  onBtExport() {
    this.gridApi.exportDataAsExcel();
  }

  
  Search() {
    if (this.firstName == "") {
      this.ngOnInit();
    } else {
      this.users = this.users.filter(res => {
        return res.firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
      });
    }
  }
  key: string = 'id';
  reverse:boolean = false;
  sort(key: string) {
    this.key = key;
    this.reverse = !this.reverse;
  }

}