import { Component, OnInit, OnDestroy } from '@angular/core';
import { CompetitionModel } from 'src/app/models/competition.model';
import { RegistrationModel } from 'src/app/models/competition/registration.model';
import { DirectionsModel } from 'src/app/models/competition/directions.model';
import { ScheduleModel } from 'src/app/models/competition/schedule.model';
import { ExtraTabModel } from 'src/app/models/competition/extratab.model';
import { CompetitionService } from '../services/competition.service';
import { Subscription } from 'rxjs';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-competition',
  templateUrl: './competition.component.html',
  styleUrls: ['./competition.component.css']
})
export class CompetitionComponent implements OnInit, OnDestroy {

  competition: CompetitionModel;
  registration: RegistrationModel;
  directions: DirectionsModel[];
  schedule: ScheduleModel[];
  tabs: ExtraTabModel[];
  currentIndex: number = 0;
  private subscr: Subscription;


  constructor(private compSVC: CompetitionService, private router: Router, private activatedRoute: ActivatedRoute, private titleSVC: TitleManagerService, private metaSVC: MetaManagerService) { }

  ngOnInit() {
    let compId: string = this.activatedRoute.snapshot.paramMap.get("id");
    this.compSVC.getCompetition(compId).subscribe((res: CompetitionModel) => {
      this.competition = res;
      this.titleSVC.setTitle(res.name);
      this.metaSVC.updateMeta("title", res.name);
      this.metaSVC.updateMeta("description", `Il ${res.name} si svolgerà a ${res.city} il ${res.getCompDate()}`);
      this.metaSVC.updateMeta("og:title", res.name);
      this.metaSVC.updateMeta("og:description", `Il ${res.name} si svolgerà a ${res.city} il ${res.getCompDate()}`);
    });
    this.compSVC.getRegistration(compId).subscribe((res: RegistrationModel) => this.registration = res);
    this.compSVC.getDirections(compId).subscribe((res: DirectionsModel[]) => this.directions = res);
    this.compSVC.getSchedule(compId).subscribe((res: ScheduleModel[]) => this.schedule = res);
    this.compSVC.getCompetitionExtraTabs(compId).subscribe((res: ExtraTabModel[]) => this.tabs = res);
    this.currentIndex = Number(this.activatedRoute.snapshot.queryParamMap.get("tab")) || 0;
    this.subscr = this.activatedRoute.queryParams.subscribe(queryParams => {
      this.currentIndex = Number(queryParams['tab']) || 0;
    })
  }

  updateURL(index: number) {
    if (index > 0) {
      this.router.navigate(['./'], { relativeTo: this.activatedRoute, queryParams: { tab: index } });
    } else {
      this.router.navigate(['./'], { relativeTo: this.activatedRoute });
    }
  }

  ngOnDestroy() {
    this.subscr.unsubscribe();
    this.metaSVC.resetMeta();
  }
}
