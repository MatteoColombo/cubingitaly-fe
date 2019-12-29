import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssociationRoutingModule } from './association-routing.module';
import { AssociationComponent } from './association/association.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageModule } from '../page/page.module';
import { PageEditorModule } from '../page-editor/page-editor.module';
import { MatButtonModule,  MatIconModule, MatFormFieldModule, MatInputModule, MatRadioModule, MatDatepickerModule, MatNativeDateModule, MatExpansionModule, DateAdapter } from '@angular/material';
import { AssociationFormComponent } from './association-form/association-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {  ReactiveFormsModule } from '@angular/forms';
import { StringDateAdapter } from './adapter/string-date-adapter';
import { AssociationService } from './services/association.service';


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
  ],providers:[
    AssociationService,
    {provide: DateAdapter, useClass: StringDateAdapter},
  ]
})
export class AssociationModule { }
