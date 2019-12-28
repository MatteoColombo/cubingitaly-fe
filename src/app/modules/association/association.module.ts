import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { AssociationComponent } from './association/association.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageModule } from '../page/page.module';
import { PageEditorModule } from '../page-editor/page-editor.module';
import { MatButtonModule, MatTreeModule, MatIconModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, DateAdapter, MAT_DATE_LOCALE } from '@angular/material';
import { AssociationFormComponent } from './association-form/association-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AssociationComponent, AssociationFormComponent],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    FlexLayoutModule,
    PageModule,
    PageEditorModule,
    MatButtonModule,
    MatTreeModule,
    FontAwesomeModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule
  ], 
})
export class AssociationModule { }
