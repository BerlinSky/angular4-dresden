import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject'
import { Store } from '@ngrx/store'

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
      this.subject$.mapTo('hour'),
      Observable.interval(3000).mapTo('second')
    )
    .subscribe((type) => {
      this.store.dispatch({type})
    })
  }
}
