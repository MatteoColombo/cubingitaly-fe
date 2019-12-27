import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PermissionDeniedComponent } from './components/permission-denied/permission-denied.component';
import { LoginComponent } from './components/login/login.component';
import { PanelComponent } from './modules/panel/panel/panel.component';


const routes: Routes = [
  { loadChildren: 'src/app/modules/homepage/homepage.module#HomepageModule', path: '' },
  { loadChildren: 'src/app/modules/article/article.module#ArticleModule', path: 'articoli' },
  { loadChildren: 'src/app/modules/article-editor/article-editor.module#ArticleEditorModule', path: 'admin/articoli' },
  { loadChildren: 'src/app/modules/competition-editor/competition-editor.module#CompetitionEditorModule', path: 'admin/competizioni' },
  { loadChildren: 'src/app/modules/competition/competition.module#CompetitionModule', path: 'competizioni' },
  { loadChildren: 'src/app/modules/contacts/contacts.module#ContactsModule', path: 'contatti' },
  { loadChildren: 'src/app/modules/faq/faq.module#FaqModule', path: 'faq' },
  { loadChildren: 'src/app/modules/faq-editor/faq-editor.module#FaqEditorModule', path: 'admin/faq' },
  { loadChildren: 'src/app/modules/team/team.module#TeamModule', path: 'team' },
  { loadChildren: 'src/app/modules/tutorial/tutorial.module#TutorialModule', path: 'tutorial' },
  { loadChildren: 'src/app/modules/tutorial-editor/tutorial-editor.module#TutorialEditorModule', path: 'admin/tutorial' },
  { path: 'pannello', component: PanelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'permesso-negato', component: PermissionDeniedComponent },
  { path: 'non-trovato', component: NotFoundComponent },
  { path: "**", redirectTo: 'non-trovato', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
