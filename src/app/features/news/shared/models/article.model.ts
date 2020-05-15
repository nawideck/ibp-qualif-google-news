import { Source } from './source.model';

/**
 * Article model
 *
 * @export
 */
export class Article {
  public source: Source;
  public author: string;
  public title: string;
  public description: string;
  public url: string;
  public urlToImage: string;
  public publishedAt: string;
  public content: string;

  /**
   * Creates an instance of Article.
   */
  constructor() {
    this.source = new Source();
    this.author = '';
    this.title = '';
    this.description = '';
    this.url = '';
    this.urlToImage = '';
    this.publishedAt = '';
    this.content = '';
  }
}
