import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TutorialRoutingModule } from './tutorial-routing.module';
import { TutorialComponent } from './tutorial/tutorial.component';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialSummaryComponent } from './tutorial-summary/tutorial-summary.component';
import { EditorQuickActionsComponent } from './editor-quick-actions/editor-quick-actions.component';
import { TutorialService } from './services/tutorial.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageModule } from '../page/page.module';
import { MatButtonModule, MatPaginatorModule, MatTableModule } from '@angular/material';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [TutorialComponent, TutorialListComponent, TutorialSummaryComponent, EditorQuickActionsComponent],
  imports: [
    CommonModule,
    TutorialRoutingModule,
    FlexLayoutModule,
    PageModule,
    MatButtonModule,
    MatPaginatorModule,
    SharedComponentsModule,
    MatTableModule,
    FontAwesomeModule
  ],providers:[TutorialService]
})
export class TutorialModule { }
