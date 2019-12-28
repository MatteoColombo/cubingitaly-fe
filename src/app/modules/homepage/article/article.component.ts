import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../services/article.service';
import { ArticleModel } from 'src/app/models/article.model';

@Component({
  selector: 'article-widget',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article: ArticleModel;
  constructor(private articleSvc: ArticleService) { }

  ngOnInit() {
    this.articleSvc.getPublicNews(1).subscribe(res => {
      this.article=res[0];
    })
  }

}
