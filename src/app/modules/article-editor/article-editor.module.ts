import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleEditorRoutingModule } from './article-editor-routing.module';
import { ArticleAdminComponent } from './article-admin/article-admin.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule, MatPaginatorIntl } from '@angular/material/paginator';
import { ItalianMatPaginator } from './services/article.paginator.it';
import { ArticleGuardService } from './services/article-guard.service';
import { ArticleService } from './services/article.service';
import { CKEditorModule} from "@ckeditor/ckeditor5-angular";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatTableModule, MatExpansionModule, MatChipsModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ArticleEditorQuickActionsComponent } from './article-editor-quick-actions/article-editor-quick-actions.component';


@NgModule({
  declarations: [ArticleAdminComponent, ArticleEditorComponent, ArticleEditorQuickActionsComponent],
  imports: [
    CommonModule,
    ArticleEditorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MatPaginatorModule,
    CKEditorModule,
    FontAwesomeModule,
    MatTableModule,
    MatExpansionModule,
    MatChipsModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    SharedComponentsModule,

  ], providers: [ArticleService, ArticleGuardService, { provide: MatPaginatorIntl, useClass: ItalianMatPaginator }],
})
export class ArticleEditorModule { }
