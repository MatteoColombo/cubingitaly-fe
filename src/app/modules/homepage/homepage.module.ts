import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompetitionsComponent } from './competitions/competitions.component';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SliderService } from './services/slider.service';
import { CompetitionsService } from './services/competitions.service';
import { SlideshowModule } from 'ng-simple-slideshow';

@NgModule({
  declarations: [CompetitionsComponent, HomepageComponent, WelcomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SlideshowModule
  ], providers: [SliderService, CompetitionsService],
  exports: [HomepageComponent]
})
export class HomepageModule { }
