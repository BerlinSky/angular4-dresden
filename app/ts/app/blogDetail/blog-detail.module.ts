import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailComponent } from './blog-detail.component';
import  blogDetailRoutes  from './blog-detail.routes';
import { TimeDisplay } from './time-display.component'

@NgModule({
  imports: [CommonModule, blogDetailRoutes],
  declarations: [BlogDetailComponent, TimeDisplay],
  exports: [BlogDetailComponent]
})

export class BlogDetailModule {}
