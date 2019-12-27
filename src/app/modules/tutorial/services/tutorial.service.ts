import { Injectable } from '@angular/core';
import { TutorialModel } from 'src/app/models/tutorial.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  private baseAPI: string = "/api/v0/tutorial";

  constructor(private http: HttpClient) { }

  public getTutorials(): Observable<TutorialModel[]> {
    return this.http.get<TutorialModel[]>(this.baseAPI).pipe(map(res => res.map(p => Deserialize(p, TutorialModel))));
  }

  public getAllTutorials(): Observable<TutorialModel[]> {
    return this.http.get<TutorialModel[]>(this.baseAPI + "/admin").pipe(map(res => res.map(p => Deserialize(p, TutorialModel))));
  }

  public getTutorial(id: string): Observable<TutorialModel> {
    return this.http.get<TutorialModel>(this.baseAPI + "/" + id).pipe(map(res => Deserialize(res, TutorialModel)));
  }

  public adminGetTutorial(id: string): Observable<TutorialModel> {
    return this.http.get<TutorialModel>(this.baseAPI + "/" + id + "/admin").pipe(map(res => Deserialize(res, TutorialModel)));
  }

}
