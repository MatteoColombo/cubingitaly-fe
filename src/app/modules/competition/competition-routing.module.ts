import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfficialComponent } from './official/official.component';
import { CandidateComponent } from './candidate/candidate.component';
import { MyCompetitionsComponent } from './my-competitions/my-competitions.component';
import { AdminComponent } from './admin/admin.component';
import { CompetitionComponent } from './competition/competition.component';


const routes: Routes = [
  {
    path: '', component: OfficialComponent
},
{
    path: 'proposte', component: CandidateComponent
},
{
    path: 'mie', component: MyCompetitionsComponent
},
{
    path: 'admin', component: AdminComponent
},
{
    path: ':id', component: CompetitionComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompetitionRoutingModule { }
