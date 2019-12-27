import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PageModule } from '../page/page.module';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    FlexLayoutModule,
    PageModule
  ]
})
export class AboutUsModule { }
