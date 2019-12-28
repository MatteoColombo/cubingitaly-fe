import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { PageEditorService } from './services/page-editor.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { MatFormFieldModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageEditorComponent],
  imports: [
    CommonModule,
    FontAwesomeModule,
    CKEditorModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    MatInputModule
  ],
  exports:[PageEditorComponent],
  providers:[PageEditorService]
})
export class PageEditorModule { }
