import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-study-guide',
  templateUrl: './study-guide.component.html',
  styleUrls: ['./study-guide.component.less']
})
export class StudyGuideComponent implements OnInit {

  // CSS class applied to "host" of this component
  // We want each study-guide to be on its own row.
  // Since we are using Semantic UI, Semantic provides a CSS class for rows called 'row'.
  // We are asking Angular to keep the value of the host elements class to be in sync
  // with the property cssClass. In other words, every element with class attr will
  // automatically have the 'row' value added.
  @HostBinding('attr.class') cssClass='row';
  
  votes: number;
  title: string;
  link: string;

  constructor() {
    this.title = 'Angular 2';
    this.link = 'http://angular.io';
    this.votes = 10;
  }

  voteUp(){
    this.votes += 1;
    return false;
  }

  voteDown(){
    this.votes -= 1;
    return false;
  }

  ngOnInit(): void {
  }

}
