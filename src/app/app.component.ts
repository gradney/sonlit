import { Component } from '@angular/core';
import { StudyGuide } from './study-guide/study-guide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  appTitle = 'sonlit';

  studyGuides: StudyGuide[]; //using Array; else, could use generics like Array<StudyGuide>.

  // Add
  // https://www.christianitytoday.com/pastors/2016/july-web-exclusives/top-10-resources-for-church-planters.html
  // https://churchtechtoday.com/2018/03/23/10-missionally-focused-church-planting-networks/
  // https://newchurches.com/?s_kwcid=AL%214443%213%21421666687854%21p%21%21g%21%21church%20planting
  // https://www.startchurch.com/services/501c3?utm_source=google&utm_medium=cpc&utm_campaign=church%20other&utm_content=Church%20Planting%20Program&gclid=Cj0KCQjwjoH0BRD6ARIsAEWO9DvG8ilSEdCrh6qtrjl4RaAmdUxov_2eds6QoDRDiSZhSWVoc8UHhgYaAtBQEALw_wcB
  // https://www.namb.net/church-planting/
  // http://verticalchurchnetwork.org/
  // https://www.seedbed.com/4-church-planting-networks-know/
  // http://goba.org/church-planting?gclid=Cj0KCQjwjoH0BRD6ARIsAEWO9DtH8pduTIfnQvhI5jhZ-4CKzo6td_3T2YSrm1cuqMMBa8XOOzljIgsaAqFFEALw_wcB
  constructor() {
    this.studyGuides = [
      new StudyGuide('Bible Online','http://biblegateway.com/', 3),
      new StudyGuide('Christian Apologetics','https://www.biola.edu/talbot/academics/apologetics', 2),
      new StudyGuide('Church Tech Today','https://churchtechtoday.com', 1),
    ];
  }

  addStudyGuide(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding study guide titled: ${title.value} and linked: ${link.value}`);
    return false;
  }
}
