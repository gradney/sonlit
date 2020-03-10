import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.less']
})
export class UserListComponent implements OnInit {

 // properties
 names: string[];

 constructor() {

   // default new username
   this.names = ['Aaron', 'Alexis', 'Dan', 'Gordon', 'Bishop'];
 }
  ngOnInit(): void {
  }

}
