import { Injectable } from '@angular/core';
import { AssociationRequest } from 'src/app/models/association-request.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AssociationComponent } from '../association/association.component';
import { Deserialize } from 'cerialize';
import { AssociationDocumentModel } from 'src/app/models/association-document.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AssociationService {

  constructor(private http:HttpClient){}

  public sendMail(request:AssociationRequest): Observable<any> {
    return this.http.post("/api/v0/association/associate", { 'request': request });
  }

  public sendMailEng(request:AssociationRequest): Observable<any> {
    return this.http.post("/api/v0/association/associate-eng", { 'request': request });
  }

  public getDocuments():Observable<AssociationDocumentModel[]>{
    return this.http.get("/api/v0/association").pipe(map(res => Deserialize(res,AssociationDocumentModel)));
  }

}
