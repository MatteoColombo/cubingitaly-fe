import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'article-editor-quick-actions',
  templateUrl: './article-editor-quick-actions.component.html',
  styleUrls: ['./article-editor-quick-actions.component.css']
})
export class ArticleEditorQuickActionsComponent implements OnInit {

  @Input() articleId: string;
  @Input() editing: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
