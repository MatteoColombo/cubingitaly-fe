import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleEditorRoutingModule } from './article-editor-routing.module';
import { ArticleAdminComponent } from './article-admin/article-admin.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { ItalianMatPaginator } from './services/article.paginator.it';
import { ArticleGuardService } from './services/article-guard.service';
import { ArticleService } from './services/article.service';


@NgModule({
  declarations: [ArticleAdminComponent, ArticleEditorComponent, ArticleService, ArticleGuardService, ItalianMatPaginator],
  imports: [
    CommonModule,
    ArticleEditorRoutingModule,
    FormsModule,
    FlexLayoutModule,
    MatPaginatorModule
  ], providers: [ArticleService, ArticleGuardService, { provide: MatPaginatorIntl, useClass: ItalianMatPaginator }],
})
export class ArticleEditorModule { }
