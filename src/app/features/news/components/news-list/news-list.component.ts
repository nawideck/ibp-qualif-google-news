import { Component, OnInit, Input } from '@angular/core';
import { ArticlesStoreService } from '../../shared/services/articles-store/articles-store.service';
import { Router } from '@angular/router';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.scss']
})
export class NewsListComponent implements OnInit {
  @Input() articles: Article[];

  /**
   * Creates an instance of NewsListComponent.
   * @param  articlesStoreService articlesStoreService
   * @param  router router
   */
  constructor(private articlesStoreService: ArticlesStoreService, private router: Router) {
    this.articles = null;
  }

  /**
   * native angular method
   */
  ngOnInit(): void {}

  /**
   * click event on Article link
   *
   * @param article article
   */
  onClickArticle(article: Article) {
    this.articlesStoreService.setArticle(article);
    this.router.navigate(['news', 'view']);
  }
}
