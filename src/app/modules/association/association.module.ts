import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { AssociationComponent } from './association/association.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageModule } from '../page/page.module';
import { PageEditorModule } from '../page-editor/page-editor.module';
import { MatButtonModule,  MatIconModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule } from '@angular/material';
import { AssociationFormComponent } from './association-form/association-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AssociationComponent, AssociationFormComponent],
  imports: [
    CommonModule,
    AssociationRoutingModule,
    FlexLayoutModule,
    PageModule,
    PageEditorModule,
    MatButtonModule,
    MatExpansionModule,
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
