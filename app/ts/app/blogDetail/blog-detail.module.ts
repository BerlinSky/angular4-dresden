import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogDetailComponent } from './blog-detail.component';
import  blogDetailRoutes  from './blog-detail.routes';

@NgModule({
  imports: [CommonModule, blogDetailRoutes],
  declarations: [BlogDetailComponent],
  exports: [BlogDetailComponent]
})

export class BlogDetailModule {}
