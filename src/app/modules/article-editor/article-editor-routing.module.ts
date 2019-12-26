import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleGuardService } from './services/article-guard.service';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticleAdminComponent } from './article-admin/article-admin.component';


const routes: Routes = [
  {
    path: '', canActivate: [ArticleGuardService], redirectTo: 'admin/1', pathMatch: 'full', data: { requiredRole: "admin" }
  },
  {
    path: 'admin', canActivate: [ArticleGuardService], redirectTo: 'admin/1', pathMatch: 'full', data: { requiredRole: "admin" }
  },
  {
    path: 'admin/:page', canActivate: [ArticleGuardService], component: ArticleAdminComponent, data: { requiredRole: "admin" }
  },
  {
    path: 'new', canActivate: [ArticleGuardService], component: ArticleEditorComponent, data: { intent: "new", requiredRole: "admin" }
  },
  {
    path: ':id', canActivate: [ArticleGuardService], component: ArticleEditorComponent, data: { intent: "edit", requiredRole: "editor" }
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleEditorRoutingModule { }
