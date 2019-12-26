import { Component, OnInit, Input } from '@angular/core';
import { ArticleModel } from 'src/app/models/article.model';

@Component({
  selector: 'article-category-viewer',
  templateUrl: './article-category-viewer.component.html',
  styleUrls: ['./article-category-viewer.component.css']
})
export class ArticleCategoryViewerComponent implements OnInit {

  @Input() article: ArticleModel;

  constructor() { }

  ngOnInit() {
  }
}
