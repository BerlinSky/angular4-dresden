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

  // timer = Observable
  //   .interval(1000)
  //   .map(() => new Date());

  constructor() {
    // this.timer.subscribe(console.log.bind(console));
    this.timer = this.subject$.map(() => new Date());
  }
}
