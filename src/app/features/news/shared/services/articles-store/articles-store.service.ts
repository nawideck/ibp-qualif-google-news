import { Injectable } from '@angular/core';
import { Article } from '../../models/article.model';

/**
 * Store selected article
 *
 * @export
 */
@Injectable({
  providedIn: 'root'
})
export class ArticlesStoreService {
  private article: Article;

  /**
   * Creates an instance of ArticlesStoreService.
   */
  constructor() {
    this.article = null;
  }

  /**
   * Set selected article
   *
   * @param article article
   */
  setArticle(article: Article) {
    this.article = article;
  }

  /**
   * Get selected article
   *
   * @returns article
   */
  getArticle(): Article {
    return this.article;
  }
}
