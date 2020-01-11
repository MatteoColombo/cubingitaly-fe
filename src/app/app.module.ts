import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler, LOCALE_ID } from '@angular/core';


//Imported modules
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';

//Declared component/modules
import { FooterComponent } from './components/footer/footer.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { PermissionDeniedComponent } from './components/permission-denied/permission-denied.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ErrorDialogComponent } from './components/error-dialog/error-dialog.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { BackToTopComponent } from './components/back-to-top/back-to-top.component';
import { SharedComponentsModule } from './modules/shared-components/shared-components.module';
import { ErrorHandlerService } from './services/error-handler.service';
import { HttpService } from './services/http.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TitleManagerService } from './services/title-manager.service';
import { MetaManagerService } from './services/meta-manager.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';

import {
  faHome, faLink, faPlusCircle, faTimesCircle, faArrowCircleUp, faArrowCircleDown, faInfoCircle, faBook, faEnvelope, faLock, faCheck, faEdit,
  faTrash, faPlusSquare, faEye, faList, faWrench, faBars, faLongArrowAltDown, faSignInAlt,
  faArrowUp, faLongArrowAltUp, faUserSlash, faUserPlus, faUser, faHammer, faTrophy, faQuestion, faAngleDown, faAngleUp, faExternalLinkAlt, faSitemap, faUpload
} from '@fortawesome/free-solid-svg-icons';
import { faNewspaper, faCopyright, faFilePdf, faQuestionCircle } from '@fortawesome/free-regular-svg-icons';
import { faFacebookF, faTwitter, faTelegram, faYoutube, faTelegramPlane, faInstagram, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { LoginComponent } from './components/login/login.component';

import { registerLocaleData } from '@angular/common';
import localeIt from '@angular/common/locales/it';
import { EmailSentDialogComponent } from './components/email-sent-dialog/email-sent-dialog.component';
import { PanelModule } from './modules/panel/panel.module';
import { RequestSentComponent } from './components/request-sent/request-sent.component';
import { ConfirmEmailEngComponent } from './components/confirm-email-eng/confirm-email-eng.component';

registerLocaleData(localeIt, 'it');

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    PermissionDeniedComponent,
    NotFoundComponent,
    ErrorDialogComponent,
    ConfirmDialogComponent,
    BackToTopComponent,
    LoginComponent,
    EmailSentDialogComponent,
    RequestSentComponent,
    ConfirmEmailEngComponent
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
    HttpClientModule,
    MatSidenavModule,
    MatButtonModule,
    PanelModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpService, multi: true },
    { provide: LOCALE_ID, useValue: "it-IT" },
    { provide: ErrorHandler, useClass: ErrorHandlerService },
    AuthService,
    UserService,
    MetaManagerService,
    TitleManagerService,
    ErrorHandlerService
  ],
  bootstrap: [AppComponent],
  entryComponents: [ErrorDialogComponent, ConfirmDialogComponent, ConfirmEmailEngComponent , EmailSentDialogComponent,RequestSentComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome,faFilePdf, faSitemap, faInfoCircle, faQuestionCircle, faLink, faUpload, faWrench, faTelegramPlane, faPlusCircle, faSignInAlt, faTimesCircle, faNewspaper, faBook, faEnvelope, faWhatsapp, faLock, faTrash, faCopyright, faArrowUp, faPlusSquare, faEye, faList,
      faFacebookF, faTwitter, faTelegram, faAngleUp, faHammer, faArrowCircleUp, faExternalLinkAlt, faAngleDown, faArrowCircleDown, faYoutube, faInstagram, faGithub, faCheck, faEdit, faUser, faBars, faLongArrowAltDown, faLongArrowAltUp, faUserSlash, faUserPlus, faTrophy, faQuestion);
  }

}
