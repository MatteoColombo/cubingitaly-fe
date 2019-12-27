import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqEditorRoutingModule } from './faq-editor-routing.module';
import { FaqEditorComponent } from './faq-editor/faq-editor.component';
import { FaqQuickActionsComponent } from './faq-quick-actions/faq-quick-actions.component';
import { FaqAdminComponent } from './faq-admin/faq-admin.component';
import { FaqService } from './services/faq.service';
import { FaqGuardService } from './services/faq-guard.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { MatOptionModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTableModule, MatButtonModule } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FaqEditorComponent, FaqQuickActionsComponent, FaqAdminComponent],
  imports: [
    CommonModule,
    FaqEditorRoutingModule,
    FlexLayoutModule,
    SharedComponentsModule,
    MatOptionModule,
    MatFormFieldModule,
    MatInputModule,
    CKEditorModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatTableModule,
    MatButtonModule

  ],
  providers:[FaqService,FaqGuardService]
})
export class FaqEditorModule { }
