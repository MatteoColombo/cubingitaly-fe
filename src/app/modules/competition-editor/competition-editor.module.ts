import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionEditorRoutingModule } from './competition-editor-routing.module';
import { CompetitionEditService } from './services/competition-edit.service';
import { CompEditGuardService } from './services/comp-edit-guard.service';
import { DirectionsEditComponent } from './directions-edit/directions-edit.component';
import { EditComponent } from './edit/edit.component';
import { ExtraTabEditComponent } from './extra-tab-edit/extra-tab-edit.component';
import { GeneralEditComponent } from './general-edit/general-edit.component';
import { ManageCompetitionComponent } from './manage-competition/manage-competition.component';
import { RegistrationEditComponent } from './registration-edit/registration-edit.component';
import { ScheduleEditComponent } from './schedule-edit/schedule-edit.component';
import { NewComponent } from './new/new.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule, MatButtonModule, MatInputModule, MatFormFieldModule, MatDatepickerModule, MatNativeDateModule, MatChipsModule, MatAutocompleteModule, MatSelectModule, MatSlideToggleModule, MatTableModule, MatCheckboxModule } from '@angular/material';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [DirectionsEditComponent, EditComponent, ExtraTabEditComponent, GeneralEditComponent, ManageCompetitionComponent, RegistrationEditComponent, ScheduleEditComponent, NewComponent],
  imports: [
    CommonModule,
    CompetitionEditorRoutingModule,
    FlexLayoutModule,
    MatTabsModule,
    MatButtonModule,
    CKEditorModule,
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatAutocompleteModule,
    FontAwesomeModule,
    MatSelectModule,
    SharedComponentsModule,
    MatSlideToggleModule,
    MatTableModule,
    ReactiveFormsModule,
    MatCheckboxModule
  ],
  providers: [CompetitionEditService, CompEditGuardService]
})
export class CompetitionEditorModule { }
