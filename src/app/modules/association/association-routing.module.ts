import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociationComponent } from './association/association.component';
import { AssociationFormComponent } from './association-form/association-form.component';


const routes: Routes = [
  { path: '', component: AssociationComponent },
  { path: 'associati', component: AssociationFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule { }
