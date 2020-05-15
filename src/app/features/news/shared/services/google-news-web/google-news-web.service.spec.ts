import { TestBed, async } from '@angular/core/testing';

import { GoogleNewsWebService } from './google-news-web.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GoogleNewsWebService', () => {
  let service: GoogleNewsWebService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GoogleNewsWebService);
    http = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    http.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Observable with list of articles', async(() => {
    // fake response
    const hardcodedNewsApi = {
      status: 'ok',
      totalResults: 12323,
      articles: [
        {
          title: 'myTitle01',
          content: 'myContent01'
        }
      ]
    };

    // call the service
    let actualNews = null;
    service.list(1, 13).subscribe((races) => (actualNews = races));

    // check that the underlying HTTP request was correct
    http
      .expectOne('/api/news/top-headlines?country=fr&page=1&pageSize=13')
      // return the fake response when we receive a request
      .flush(hardcodedNewsApi);

    // check that the returned array is deserialized as expected
    expect(actualNews.status).toBe('ok');
    expect(actualNews.articles.length).toBe(1);
    expect(actualNews.articles[0].title).toBe('myTitle01');
    expect(actualNews.articles[0].content).toBe('myContent01');
  }));
});
