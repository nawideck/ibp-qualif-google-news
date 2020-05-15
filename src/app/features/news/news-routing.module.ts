import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsListPageComponent } from './pages/news-list-page/news-list-page.component';
import { NewsViewPageComponent } from './pages/news-view-page/news-view-page.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: NewsListPageComponent
  },
  {
    path: 'view',
    component: NewsViewPageComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {}
