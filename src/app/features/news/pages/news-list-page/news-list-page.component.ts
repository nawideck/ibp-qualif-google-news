import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';

import { GoogleNewsWebService } from '../../shared/services/google-news-web/google-news-web.service';
import { NewsApi } from '../../shared/models/news-api.model';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-news-list-page',
  templateUrl: './news-list-page.component.html',
  styleUrls: ['./news-list-page.component.scss']
})
export class NewsListPageComponent implements OnInit {
  public articles: Article[];

  /**
   * Creates an instance of NewsListPageComponent.
   * @param  googleNewsWebService googleNewsWebService
   */
  constructor(private googleNewsWebService: GoogleNewsWebService) {
    this.articles = [];
  }

  /**
   * Native angular method
   *
   */
  ngOnInit(): void {
    this.getNews().subscribe();
  }

  /**
   * Get list of news from NewsApi
   * @returns Observable with list of news
   */
  private getNews() {
    return this.googleNewsWebService.list(1, 10).pipe(
      map((data: NewsApi) => {
        this.articles = data && data.articles ? data.articles : null;
      })
    );
  }
}
