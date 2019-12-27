import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqGuardService } from './services/faq-guard.service';
import { FaqEditorComponent } from './faq-editor/faq-editor.component';
import { FaqAdminComponent } from './faq-admin/faq-admin.component';


const routes: Routes = [
  { path: '', redirectTo:'admin',pathMatch:'full' },
  { path: 'admin', canActivate: [FaqGuardService], component: FaqAdminComponent },
  { path: 'new', canActivate: [FaqGuardService], component: FaqEditorComponent, data: { intent: "new", role: "admin" } },
  { path: 'edit/:id', canActivate: [FaqGuardService], component: FaqEditorComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaqEditorRoutingModule { }
