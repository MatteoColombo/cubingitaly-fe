import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TutorialGuardService } from './services/tutorial-guard.service';
import { TutorialAdminComponent } from './tutorial-admin/tutorial-admin.component';
import { TutorialEditorComponent } from './tutorial-editor/tutorial-editor.component';


const routes: Routes = [
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: 'new', canActivate: [TutorialGuardService], component: TutorialEditorComponent, data: { intent: "new", requiredRole: "create" } },
  { path: 'admin', canActivate: [TutorialGuardService], component: TutorialAdminComponent, data: { requiredRole: "edit" } },
  { path: ':id', canActivate: [TutorialGuardService], component: TutorialEditorComponent, data: { intent: "edit", requiredRole: "edit" } },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutorialEditorRoutingModule { }
