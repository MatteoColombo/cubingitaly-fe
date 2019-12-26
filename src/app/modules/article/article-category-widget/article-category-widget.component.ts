import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { ArticleCategoryModel } from 'src/app/models/category.model';
import { ArticleService } from '../services/article.service';
import { MatRadioChange } from '@angular/material/radio';

@Component({
  selector: 'article-category-widget',
  templateUrl: './article-category-widget.component.html',
  styleUrls: ['./article-category-widget.component.css']
})
export class ArticleCategoryWidgetComponent implements OnInit {
  categories: ArticleCategoryModel[];
  @Input() selected: string = "";
  @Output() selectedChange = new EventEmitter();
  @Output() change = new EventEmitter();
  backup: string;
  constructor(private articleSVC: ArticleService) { }

  ngOnInit() {
    this.articleSVC.getCategories().subscribe(res => this.categories = res.sort((a, b) => {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }))
  }

  radioChange(event: MatRadioChange) {
    this.selectedChange.emit(event.value);
    this.change.emit(event.value);
  }

}
