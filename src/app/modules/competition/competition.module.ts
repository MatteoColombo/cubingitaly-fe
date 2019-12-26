import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompetitionRoutingModule } from './competition-routing.module';
import { ScheduleDayPipe } from './pipes/schedule-day.pipe';
import { CompDaysPipe } from './pipes/comp-days.pipe';
import { CompDatePipe } from './pipes/comp-date.pipe';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule, MatTabsModule, MatCardModule, MatListModule } from '@angular/material';
import { CompetitionService } from './services/competition.service';
import { AdminComponent } from './admin/admin.component';
import { CandidateComponent } from './candidate/candidate.component';
import { CompetitionComponent } from './competition/competition.component';
import { DesktopOfficialTableComponent } from './desktop-official-table/desktop-official-table.component';
import { DirectionsComponent } from './directions/directions.component';
import { DisclaimerComponent } from './disclaimer/disclaimer.component';
import { ExtraTabComponent } from './extra-tab/extra-tab.component';
import { GeneralComponent } from './general/general.component';
import { KeepUpWidgetComponent } from './keep-up-widget/keep-up-widget.component';
import { ManageWidgetComponent } from './manage-widget/manage-widget.component';
import { MobileRowOfficialComponent } from './mobile-row-official/mobile-row-official.component';
import { MobileRowComponent } from './mobile-row/mobile-row.component';
import { MyCompetitionsComponent } from './my-competitions/my-competitions.component';
import { MyDesktopTableComponent } from './my-desktop-table/my-desktop-table.component';
import { MyMobileRowComponent } from './my-mobile-row/my-mobile-row.component';
import { OfficialComponent } from './official/official.component';
import { OrganizeWidgetComponent } from './organize-widget/organize-widget.component';
import { RegistrationComponent } from './registration/registration.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { HtmlViewerModule } from '../html-viewer/html-viewer.module';
import { PageModule } from '../page/page.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SharedComponentsModule } from '../shared-components/shared-components.module';


@NgModule({
  declarations: [ScheduleDayPipe, CompDaysPipe, CompDatePipe, AdminComponent, CandidateComponent, CompetitionComponent, DesktopOfficialTableComponent, DirectionsComponent, DisclaimerComponent, ExtraTabComponent, GeneralComponent, KeepUpWidgetComponent, ManageWidgetComponent, MobileRowOfficialComponent, MobileRowComponent, MyCompetitionsComponent, MyDesktopTableComponent, MyMobileRowComponent, OfficialComponent, OrganizeWidgetComponent, RegistrationComponent, ScheduleComponent],
  imports: [
    CommonModule,
    CompetitionRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatTabsModule,
    HtmlViewerModule,
    PageModule,
    FontAwesomeModule,
    SharedComponentsModule,
    MatButtonModule,
    MatCardModule,
    MatListModule
  ],
  providers: [CompetitionService]
})
export class CompetitionModule { }
