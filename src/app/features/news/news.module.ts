import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsListPageComponent } from './pages/news-list-page/news-list-page.component';
import { NewsViewPageComponent } from './pages/news-view-page/news-view-page.component';
import { NewsViewComponent } from './components/news-view/news-view.component';
import { NewsListComponent } from './components/news-list/news-list.component';


@NgModule({
  declarations: [NewsListPageComponent, NewsViewPageComponent, NewsViewComponent, NewsListComponent],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
