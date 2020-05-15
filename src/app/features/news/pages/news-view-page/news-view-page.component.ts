import { Component, OnInit } from '@angular/core';
import { ArticlesStoreService } from '../../shared/services/articles-store/articles-store.service';
import { Router } from '@angular/router';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-news-view-page',
  templateUrl: './news-view-page.component.html',
  styleUrls: ['./news-view-page.component.scss']
})
export class NewsViewPageComponent implements OnInit {
  public article: Article;

  /**
   * Creates an instance of NewsViewPageComponent
   */
  constructor(private articlesStoreService: ArticlesStoreService, public router: Router) {
    if (this.articlesStoreService.getArticle()) {
      this.article = this.articlesStoreService.getArticle();
    } else {
      // go back to list of news if there's no article stored
      this.router.navigate(['news']);
    }
  }

  ngOnInit(): void {}
}
