import { TestBed } from '@angular/core/testing';

import { NewsApiInterceptor } from './news-api.interceptor';

describe('NewsApiInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NewsApiInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NewsApiInterceptor = TestBed.inject(NewsApiInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
