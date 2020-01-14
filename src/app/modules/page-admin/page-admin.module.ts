import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageAdminRoutingModule } from './page-admin-routing.module';
import { PageEditorModule } from '../page-editor/page-editor.module';
import { MatSelectModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageAdminGuardService } from './services/page-admin-guard.service';
import { PageAdminService } from './services/page-admin.service';


@NgModule({
  declarations: [PageAdminComponent],
  imports: [
    CommonModule,
    PageAdminRoutingModule,
    PageEditorModule,
    MatSelectModule,
    FlexLayoutModule
  ],
  providers: [
    PageAdminGuardService, PageAdminService
  ]
})
export class PageAdminModule { }
