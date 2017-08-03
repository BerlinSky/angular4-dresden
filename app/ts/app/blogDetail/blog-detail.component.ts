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
      this.subject$.mapTo('hour'),
      Observable.interval(3000).mapTo('second')
    )
    .startWith(<any>new Date())
    .scan((acc, curr) => {
      const date = new Date(acc.getTime());

      if (curr === 'second') {
        date.setSeconds(date.getSeconds() + 5);
      }

      if (curr === 'hour') {
        date.setHours(date.getHours() + 1);
      }
      return date;
    })

    // .map(() => new Date());
  }
}
