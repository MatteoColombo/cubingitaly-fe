import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageModule } from '../page/page.module';
import { MatDividerModule, MatExpansionModule } from '@angular/material';
import { TeamPipe } from './pipes/team.pipe';
import { BoardComponent } from './board/board.component';
import { BoardMemberComponent } from './board-member/board-member.component';


@NgModule({
  declarations: [AboutUsComponent, TeamPipe, BoardComponent, BoardMemberComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FlexLayoutModule,
    PageModule,
    MatDividerModule,
    MatExpansionModule
  ]
})
export class AboutUsModule { }
