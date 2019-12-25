import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


//Imported modules
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';

//Declared component/modules
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PermissionDeniedComponent } from './components/permission-denied/permission-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SharedComponentsModule } from './modules/shared-components/shared-components.module';
import { HomepageModule } from './modules/homepage/homepage.module';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    PermissionDeniedComponent,
    NotFoundComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    BackToTopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatIconModule,
    SharedComponentsModule,
    MatMenuModule,
    MatDialogModule,
    FlexLayoutModule,
    HomepageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
