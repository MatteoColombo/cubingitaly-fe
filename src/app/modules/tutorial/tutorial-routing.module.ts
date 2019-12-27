import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialListComponent } from './tutorial-list/tutorial-list.component';
import { TutorialComponent } from './tutorial/tutorial.component';


const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TutorialListComponent },
  { path: ':id', redirectTo: ':id/1', pathMatch: 'full' },
  { path: ':id/:page', component: TutorialComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialRoutingModule { }
