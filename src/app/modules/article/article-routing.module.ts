import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';


const routes: Routes = [
  {
    path: '', redirectTo: 'categorie/all/1', pathMatch: 'full'
  },
  {
    path: 'categorie/:category', redirectTo: 'categorie/all/1', pathMatch: 'full'
  },
  {
    path: 'categorie/:category/:page', component: ArticleListComponent
  },
  {
    path: ':id', component: ArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleRoutingModule { }
