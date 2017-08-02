import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Component({
  templateUrl: './blog-detail.component.pug',
   styleUrls: ['blog-detail.component.scss']
})
export class BlogDetailComponent {
  timer = Observable
    .interval(1000)
    .map(() => new Date());

  constructor() {
    // this.timer.subscribe(console.log.bind(console));
  }
}
