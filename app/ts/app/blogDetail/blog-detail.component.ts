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
  hours$ = new Subject<any>()
    .map((value) => ({ type: HOUR, payload: parseInt(value, 10)}))
    // .mapTo({ type: HOUR, payload: 1 })
  seconds$ = Observable.interval(3000)
    .mapTo({ type: SECOND, payload: 5 })

  timer: any;

  constructor(private store: Store<any>) {
    this.timer = store.select('timer');

    Observable.merge(
      this.hours$,
      this.seconds$
    )
    .subscribe(store.dispatch.bind(store))
    // .subscribe((action) => {
    //   this.store.dispatch(action)
    // })
  }
}
