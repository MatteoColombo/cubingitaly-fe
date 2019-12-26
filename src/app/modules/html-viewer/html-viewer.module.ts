import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from './safe-html.pipe';
import { HtmlViewerComponent } from './html-viewer/html-viewer.component';



@NgModule({
  declarations: [SafeHtmlPipe, HtmlViewerComponent],
  imports: [
    CommonModule
  ],
   exports: [HtmlViewerComponent]
})
export class HtmlViewerModule { }
