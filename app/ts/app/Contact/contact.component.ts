import { Component } from '@angular/core';

import { MailService } from '../services/services.module';

@Component({
  selector: 'contact',
  template: `
    <div>This is the contact component</div>
    <p> {{mailService.message}}</p>
    <search></search>
    <br />
    <news-teaser [message]="mailService.message"></news-teaser>
    <br />
    <news-teaser [message]=" 'Just to wake you up!' "></news-teaser>
  `
})
export class ContactComponent {
  constructor(private mailService: MailService) {}
}
