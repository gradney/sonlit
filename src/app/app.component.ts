import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  
  appTitle = 'sonlit';

  addStudyGuide(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding study guide titled: ${title.value} and linked: ${link.value}`);
    return false;
  }
}
