import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsViewPageComponent } from './news-view-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NewsListPageComponent } from '../news-list-page/news-list-page.component';

describe('NewsViewPageComponent', () => {
  let component: NewsViewPageComponent;
  let fixture: ComponentFixture<NewsViewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NewsViewPageComponent],
      imports: [RouterTestingModule.withRoutes([{ path: 'news', component: NewsListPageComponent }])]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
