import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { Users } from 'users';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-rest',
  templateUrl: './rest.component.html',
  styleUrls: ['./rest.component.sass']
})
export class RestComponent implements OnInit {
  users: Users[] = [];
  firstName: any;

  constructor(public rs: RestService) { }

  ngOnInit(): void {
    this.rs.getUsers().subscribe((response) => {
      this.users = response;
    })
  }
  Search(){
    if(this.firstName == ""){
    this.ngOnInit();
  } else {
this.users = this.users.filter(res =>{
  return res.firstName?.toLocaleLowerCase().match(this.firstName.toLocaleLowerCase());
});
  }
}
key: string = 'id';
reverse : boolean= false;
sort(key) {
  this.key = key;
  this.reverse = !this.reverse
}

}