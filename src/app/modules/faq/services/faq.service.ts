import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FAQModel } from 'src/app/models/faq.model';
import { map } from 'rxjs/operators';
import { Deserialize } from 'cerialize';
import { HttpClient } from '@angular/common/http';
import { FAQCategoryModel } from 'src/app/models/faq-category.model';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  private apiBase: string = "/api/v0/faq";

  constructor(private http: HttpClient) { }

  public getCategories(): Observable<FAQCategoryModel[]> {
    return this.http.get<FAQModel[]>(this.apiBase + "/categories").pipe(map(res => Deserialize(res, FAQCategoryModel)));
  }
  public getFAQs(id: string): Observable<FAQModel[]> {
    return this.http.get<FAQModel[]>(this.apiBase + "?category=" + id).pipe(map(res => Deserialize(res, FAQModel)));
  }

  public getFAQ(id: string): Observable<FAQModel> {
    return this.http.get<FAQModel[]>(this.apiBase + "/" + id).pipe(map(res => Deserialize(res, FAQModel)));
  }

}