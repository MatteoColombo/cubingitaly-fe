import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleListViewerComponent } from './article-list-viewer/article-list-viewer.component';
import { ArticleService } from './services/article.service';
import {MatPaginatorModule, MatPaginatorIntl} from '@angular/material/paginator';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ArticleCategoryWidgetComponent } from './article-category-widget/article-category-widget.component';
import { ArticleEditorQuickActionsComponent } from './article-editor-quick-actions/article-editor-quick-actions.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatCardModule} from '@angular/material/card';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HtmlViewerModule } from '../html-viewer/html-viewer.module';
import { ArticleCategoryViewerComponent } from './article-category-viewer/article-category-viewer.component';
import { ItalianMatPaginator } from './services/article.paginator.it';

@NgModule({
  declarations: [ArticleComponent, ArticleListComponent, ArticleListViewerComponent, ArticleCategoryWidgetComponent, ArticleEditorQuickActionsComponent, ArticleCategoryViewerComponent],
  imports: [
    CommonModule,
    FormsModule,
    ArticleRoutingModule,
    FontAwesomeModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatRadioModule,
    SharedComponentsModule,
    MatCardModule,
    HtmlViewerModule
  ],
  providers: [ArticleService,{ provide: MatPaginatorIntl, useClass: ItalianMatPaginator }]
})
export class ArticleModule { }
