import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import { Store } from '@ngrx/store'

import { HOUR, SECOND } from './reducers'

@Component({
  templateUrl: './blog-detail.component.pug',
  styleUrls: ['blog-detail.component.scss']
})
export class BlogDetailComponent {
  private subject$ = new Subject<any>();
  timer: any;

  constructor(private store: Store<any>) {
    this.timer = store.select('timer');

    Observable.merge(
      this.subject$.mapTo({ type: HOUR, payload: 1 }),
      Observable.interval(3000).mapTo({ type: SECOND, payload: 5 })
    )
    .subscribe((action) => {
      this.store.dispatch(action)
    })
  }
}
