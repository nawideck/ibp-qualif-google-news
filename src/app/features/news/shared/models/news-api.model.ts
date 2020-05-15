import { Article } from './article.model';

/**
 * NewsApi model
 * Object returned by News Api Server
 *
 * @export
 */
export class NewsApi {
  public status: string;
  public totalResults: number;
  public articles: Article[];

  /**
   * Creates an instance of NewsApi.
   */
  constructor() {
    this.status = '';
    this.totalResults = null;
    this.articles = [];
  }
}
