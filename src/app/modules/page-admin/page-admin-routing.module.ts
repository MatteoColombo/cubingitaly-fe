import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAdminComponent } from './page-admin/page-admin.component';
import { PageAdminGuardService } from './services/page-admin-guard.service';


const routes: Routes = [
  {
    path: '', canActivate: [PageAdminGuardService], component: PageAdminComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageAdminRoutingModule { }
