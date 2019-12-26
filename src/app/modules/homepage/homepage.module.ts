import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { CompetitionsService } from './services/competitions.service';
import { SliderService } from './services/slider.service';
import { SlideshowModule } from 'ng-simple-slideshow';
import { ArticleComponent } from './article/article.component';
import { ArticleService } from './services/article.service';
import { HomepageComponent } from './homepage/homepage.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CompetitionsComponent } from './competitions/competitions.component';

@NgModule({
  declarations: [ArticleComponent,HomepageComponent,WelcomeComponent,CompetitionsComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    FlexLayoutModule,
    RouterModule,
    SlideshowModule
  ],
  providers: [CompetitionsService,SliderService, ArticleService]
})
export class HomepageModule { }
