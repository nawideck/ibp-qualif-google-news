import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../../shared/models/article.model';

@Component({
  selector: 'app-news-view',
  templateUrl: './news-view.component.html',
  styleUrls: ['./news-view.component.scss']
})
export class NewsViewComponent implements OnInit {
  @Input() article: Article;

  /**
   * Creates an instance of NewsViewComponent.
   */
  constructor() {
    this.article = null;
  }

  ngOnInit(): void {}
}
