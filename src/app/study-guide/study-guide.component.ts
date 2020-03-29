import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { StudyGuide } from './study-guide.model';

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
  
  @Input() studyGuide: StudyGuide;

  constructor() {
    // study guide is populated by the Input now
  }

  // Why have voteUp & voteDown here and in the Model class?
  // The idea is that the voteUp() on the StudyGuideComponent
  // relates to the component view, whereas the StudyGuide model voteUp()
  // defines what mutations happen in the model (i.e. what data changes).
  // Eventually we'll move most logic to model and minimize controller
  // components work.
  voteUp(){
    this.studyGuide.voteUp();
    return false;
  }

  voteDown(){
    this.studyGuide.voteDown();
    return false;
  }

  ngOnInit(): void {
  }

}
