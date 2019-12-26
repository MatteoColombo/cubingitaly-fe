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

  public getPublicArticles(limit: number, page: number, category: string): Observable<ArticleModel[]> {
    if (category === 'all') {
      category = "";
    }
    return this.http.get<ArticleModel[]>(this.apiBase + "?limit=" + limit + "&page=" + page + (category ? "&category=" + category : "")).pipe(map(res => Deserialize(res, ArticleModel)));
  }

  public getArticle(id: string): Observable<ArticleModel> {
    return this.http.get<ArticleModel>(this.apiBase + "/" + id).pipe(map(res => Deserialize(res, ArticleModel)));
  }

  public countPublicArticles(category: string): Observable<number> {
    if (category === 'all') {
      category = "";
    }
    return this.http.get<any>(this.apiBase + "/count/public?category=" + category).pipe(map(res => res.number));
  }

  public getAllArticles(limit: number, page: number): Observable<ArticleModel[]> {
    return this.http.get<ArticleModel[]>(this.apiBase + "/admin?limit=" + limit + "&page=" + page).pipe(map(res => Deserialize(res, ArticleModel)));
  }

  public countAllArticles(): Observable<any> {
    return this.http.get<any>(this.apiBase + "/count/all");
  }

  public getCategories(): Observable<ArticleCategoryModel[]> {
    return this.http.get<ArticleCategoryModel[]>("/api/v0/categories").pipe(map(res => Deserialize(res, ArticleCategoryModel)));
  }

}
