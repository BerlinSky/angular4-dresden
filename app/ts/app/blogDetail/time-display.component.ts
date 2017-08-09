import { Component, Input } from '@angular/core'

@Component(
  {
    selector: 'time-display',
    template: `<h4>{{ timer }}</h4>`
  }
)
export class TimeDisplay {
  @Input() timer: any;
}
