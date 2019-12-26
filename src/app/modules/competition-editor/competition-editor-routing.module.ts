import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompEditGuardService } from './services/comp-edit-guard.service';
import { EditComponent } from './edit/edit.component';
import { NewComponent } from './new/new.component';


const routes: Routes = [
  {
    path: 'new', canActivate: [CompEditGuardService], component: NewComponent, data: { "requiredRole": "creator" }
},
{
    path: ':id', canActivate: [CompEditGuardService], component: EditComponent, data: { "requiredRole": "editor" }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionEditorRoutingModule { }
