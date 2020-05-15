import { TestBed } from '@angular/core/testing';

import { ArticlesStoreService } from './articles-store.service';
import { Article } from '../../models/article.model';

describe('ArticlesStoreService', () => {
  let service: ArticlesStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticlesStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('test article value', () => {
    const article = new Article();
    article.author = 'Perroquet';

    service.setArticle(article);

    expect(service.getArticle().author).toBe('Perroquet');
  });
});
