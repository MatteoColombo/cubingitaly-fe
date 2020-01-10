import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationEditorRoutingModule } from './association-editor-routing.module';
import { AssociationEditorComponent } from './association-editor/association-editor.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTableModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatRadioButton, MatRadioModule, MatDialogModule, MatSortModule } from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DocumentUploaderComponent } from './document-uploader/document-uploader.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AssociationGuardService } from './services/association-guard.service';
import { AssociationEditorService } from './services/association-editor.service';


@NgModule({
  declarations: [AssociationEditorComponent, DocumentUploaderComponent],
  imports: [
    CommonModule,
    AssociationEditorRoutingModule,
    FlexLayoutModule,
    MatTableModule,
    FontAwesomeModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRadioModule,
    MatSortModule,
    MatDialogModule
  ],providers:[AssociationGuardService,AssociationEditorService]
})
export class AssociationEditorModule { }
