import { Injectable } from '@angular/core';
import { AssociationRequest } from 'src/app/models/association-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http:HttpClient){}

  public sendMail(request:AssociationRequest): Observable<any> {
    return this.http.post("/api/v0/association/associate", { 'request': request });
  }
}
