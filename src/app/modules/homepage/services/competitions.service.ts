import { Injectable } from '@angular/core';
import { CompetitionModel } from 'src/app/models/competition.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';

@Injectable({
  providedIn: 'root'
})
export class CompetitionsService {
  constructor(private http: HttpClient) { }

  public getUpcomingCompetitions(): Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>("/api/v0/competitions/upcoming").pipe(map(res => Deserialize(res, CompetitionModel)));
  }

  public getOnGoingCompetitions(): Observable<CompetitionModel[]> {
    return this.http.get<CompetitionModel[]>("/api/v0/competitions/ongoing").pipe(map(res => Deserialize(res, CompetitionModel)));
  }
}
