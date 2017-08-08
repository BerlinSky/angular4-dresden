import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'

import { StoreModule, Store } from '@ngrx/store';

import appRoutes from './app.routes';

import { AppComponent } from './app.component';
import { ServicesModule } from './services/services.module';

import { NavbarModule } from './shared/navbar/navbar.module';

import { HomeModule } from './home/home.module';
import { NewsModule } from './news/news.module';
import { TourModule } from './tour/tour.module';
import { VideoModule } from './video/video.module';
import { MusicModule } from './music/music.module';
import { BlogDetailModule } from './blogDetail/blog-detail.module';

import { timer } from './blogDetail/reducers';

import { AdminModule } from './admin/admin.module';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HomeModule,
    NewsModule,
    TourModule,
    VideoModule,
    MusicModule,
    BlogDetailModule,
    AdminModule,
    ServicesModule.forRoot(),
    NavbarModule,
    StoreModule.forRoot({ timer }),
    appRoutes
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
