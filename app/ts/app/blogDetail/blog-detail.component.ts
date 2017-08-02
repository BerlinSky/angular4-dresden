import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'

@Component({
  templateUrl: './blog-detail.component.pug',
  styleUrls: ['blog-detail.component.scss']
})
export class BlogDetailComponent {
  private subject$ = new Subject<any>();
  timer: any;

  constructor() {
    this.timer = Observable.merge(
      this.subject$,
      Observable.interval(3000)
    ).map(() => new Date());
  }
}
