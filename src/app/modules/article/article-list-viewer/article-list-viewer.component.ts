import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleModel } from 'src/app/models/article.model';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'article-list-viewer',
  templateUrl: './article-list-viewer.component.html',
  styleUrls: ['./article-list-viewer.component.css']
})
export class ArticleListViewerComponent implements OnInit, OnChanges {

  @Input() category: string;
  @Input() page: number = 0;
  @Input() take: number = 7;

  articles$: Observable<ArticleModel[]>;

  constructor(private articleSVC: ArticleService) { }

  ngOnInit() {
    this.getArticles();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.getArticles();

  }

  getArticles() {
    this.articles$ = this.articleSVC.getPublicArticles(this.take, this.page, this.category);
  }
}