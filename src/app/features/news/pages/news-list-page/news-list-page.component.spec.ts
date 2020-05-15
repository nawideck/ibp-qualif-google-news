import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListPageComponent } from './news-list-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('NewsListPageComponent', () => {
  let component: NewsListPageComponent;
  let fixture: ComponentFixture<NewsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsListPageComponent],
      imports: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
