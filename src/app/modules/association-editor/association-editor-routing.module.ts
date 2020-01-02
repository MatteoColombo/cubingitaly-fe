import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociationEditorComponent } from './association-editor/association-editor.component';
import { AssociationGuardService } from './services/association-guard.service';


const routes: Routes = [
  {
    path: '', canActivate: [AssociationGuardService], component: AssociationEditorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationEditorRoutingModule { }
