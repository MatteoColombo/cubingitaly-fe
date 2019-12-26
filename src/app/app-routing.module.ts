import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
 { loadChildren: 'src/app/modules/homepage/homepage.module#HomepageModule', path: '' },
 { loadChildren: 'src/app/modules/article/article.module#ArticleModule', path: 'articoli' },
 { loadChildren: 'src/app/modules/article-editor/article-editor.module#ArticleEditorModule', path: 'admin/articoli' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
