import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssociationComponent } from './association/association.component';
import { AssociationFormComponent } from './association-form/association-form.component';
import { AssociationFormEngComponent } from './association-form-eng/association-form-eng.component';


const routes: Routes = [
  { path: '', component: AssociationComponent },
  { path: 'associati', component: AssociationFormComponent },
  { path: 'associati-eng', component: AssociationFormEngComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AssociationRoutingModule { }
