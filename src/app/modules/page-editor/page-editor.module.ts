import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageEditorComponent } from './page-editor/page-editor.component';
import { PageEditorService } from './services/page-editor.service';



@NgModule({
  declarations: [PageEditorComponent],
  imports: [
    CommonModule
    
  ],
  exports:[PageEditorComponent],
  providers:[PageEditorService]
})
export class PageEditorModule { }
