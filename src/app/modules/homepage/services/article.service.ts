import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from 'src/app/models/article.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { ArticleCategoryModel } from 'src/app/models/category.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private apiBase: string = "/api/v0/articles";

  constructor(private http: HttpClient) { }

  public getPublicNews(limit:number): Observable<ArticleModel[]> {
    console.log(this.apiBase + "?limit=1&page=0&category=news");
    return this.http.get<ArticleModel[]>(this.apiBase + "?limit="+limit+"&page=0&category=news" ).pipe(map(res => Deserialize(res, ArticleModel)));
  }


}
