import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewComponent } from './news-view.component';

describe('NewsViewComponent', () => {
  let component: NewsViewComponent;
  let fixture: ComponentFixture<NewsViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsViewComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsViewComponent);
    component = fixture.componentInstance;

    component.article = {
      source: { id: null, name: 'toto.com' },
      author: 'Albert Dupont',
      title: 'myTitle',
      description: 'myDescription',
      url: 'http://my-url.fr',
      urlToImage: 'http://my-url.fr/img.jpg',
      publishedAt: '2020-05-14T16:27:00Z',
      content: 'myContent'
    };

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have an image', () => {
    // then we should have an image with the correct source attribute
    // depending of the pony color
    const element = fixture.nativeElement;
    const imageElement = element.querySelector('img');
    expect(imageElement.getAttribute('src')).toBe('http://my-url.fr/img.jpg');

    expect(element.querySelector('h1').textContent).toBe('myTitle');
  });
});
