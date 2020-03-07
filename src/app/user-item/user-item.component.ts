import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.less']
})

export class UserItemComponent implements OnInit {

  // properties
  firstName: string;
  middleName: string;
  lastName: string;
  name: string;

  constructor() {

    // default new username
    this.firstName = 'John';
    this.middleName = 'The';
    this.lastName = 'Baptist';
    this.name = this.firstName +' '+ this.lastName;
  }

  ngOnInit(): void {
  }

}
