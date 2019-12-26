import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageViewerComponent } from './page-viewer/page-viewer.component';
import { HtmlViewerModule } from '../html-viewer/html-viewer.module';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [PageViewerComponent],
  imports: [
    CommonModule,
    HtmlViewerModule,
    FlexLayoutModule
  ],exports:[PageViewerComponent]
})
export class PageModule { }
