import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PageModel } from 'src/app/models/page.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';

@Injectable({
  providedIn: 'root'
})
export class PageAdminService {
  private baseAPI: string = "/api/v0/pages/public";

  constructor(private http: HttpClient) { }

  public getPublicPages(): Observable<PageModel[]> {
    return this.http.get<PageModel[]>(this.baseAPI).pipe(map(res => Deserialize(res, PageModel)));
  }


}
