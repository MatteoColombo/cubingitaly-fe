import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FaqRoutingModule } from './faq-routing.module';
import { FaqComponent } from './faq/faq.component';
import { FaqService } from './services/faq.service';
import { MatExpansionModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedComponentsModule } from '../shared-components/shared-components.module';
import { HtmlViewerModule } from '../html-viewer/html-viewer.module';
import { FaqQuickActionsComponent } from './faq-quick-actions/faq-quick-actions.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [FaqComponent, FaqQuickActionsComponent],
  imports: [
    CommonModule,
    FaqRoutingModule,
    MatExpansionModule,
    FlexLayoutModule,
    SharedComponentsModule,
    HtmlViewerModule,
    FontAwesomeModule

  ], providers: [FaqService]
})
export class FaqModule { }
