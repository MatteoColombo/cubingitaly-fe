import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialEditorRoutingModule } from './tutorial-editor-routing.module';
import { TutorialAdminComponent } from './tutorial-admin/tutorial-admin.component';
import { TutorialEditorComponent } from './tutorial-editor/tutorial-editor.component';
import { EditorQuickActionsComponent } from './editor-quick-actions/editor-quick-actions.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule, MatExpansionModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatListModule, MatPaginatorModule, MatDialogModule, MatPaginatorIntl } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PageEditorModule } from '../page-editor/page-editor.module';
import { TutorialItalianMatPaginator } from './services/tutorial.paginator.it';
import { TutorialService } from './services/tutorial.service';
import { TutorialGuardService } from './services/tutorial-guard.service';


@NgModule({
  declarations: [TutorialAdminComponent, TutorialEditorComponent, EditorQuickActionsComponent],
  imports: [
    CommonModule,
    TutorialEditorRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    CKEditorModule,
    FontAwesomeModule,
    MatExpansionModule,
    SharedComponentsModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    PageEditorModule,
    MatButtonModule,
    MatListModule,
    MatPaginatorModule,
    MatDialogModule
  ],providers:[{ provide: MatPaginatorIntl, useClass: TutorialItalianMatPaginator },TutorialService,TutorialGuardService]
})
export class TutorialEditorModule { }
