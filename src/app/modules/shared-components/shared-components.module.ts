import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleDirective } from './role.directive';
import { FacebookWidgetComponent } from './facebook-widget/facebook-widget.component';
import { ShareComponent } from './share/share.component';
import { YoutubeWidgetComponent } from './youtube-widget/youtube-widget.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ShareButtonsModule } from '@ngx-share/buttons';


@NgModule({
  declarations: [RoleDirective, FacebookWidgetComponent, ShareComponent, YoutubeWidgetComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    ShareButtonsModule
  ],
  exports: [RoleDirective, FacebookWidgetComponent, ShareComponent, YoutubeWidgetComponent]
})
export class SharedComponentsModule { }
