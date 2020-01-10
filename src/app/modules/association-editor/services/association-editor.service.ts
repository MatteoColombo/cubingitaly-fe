import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Deserialize } from 'cerialize';
import { map } from 'rxjs/operators';
import { AssociationDocumentModel } from 'src/app/models/association-document.model';

@Injectable({
  providedIn: 'root'
})
export class AssociationEditorService {

  private apiBase: string = "/api/v0/association";

  constructor(private http: HttpClient) { }

  public getDocuments(): Observable<AssociationDocumentModel[]> {
    return this.http.get(this.apiBase).pipe(map(res => Deserialize(res, AssociationDocumentModel)));
  }

  public deleteDocument(id:number):Observable<any>{
    return this.http.delete(this.apiBase+"/"+id);
  }

  public createDocument(doc: AssociationDocumentModel, file: File): Observable<AssociationDocumentModel> {
    let fdata: FormData = new FormData();
    fdata.append("uploadFile", file, file.name);
    fdata.append("title", doc.title);
    fdata.append("type", doc.type.toString());
    let headers: HttpHeaders = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    return this.http.post(this.apiBase, fdata, { headers: headers }).pipe(map(res => Deserialize(res, AssociationDocumentModel)));
  }

  public updateDocument(doc: AssociationDocumentModel, file?: File): Observable<AssociationDocumentModel> {
    let fdata: FormData = new FormData();
    fdata.append("title", doc.title);
    fdata.append("type", doc.type.toString());
    if (file) {
      fdata.append("uploadFile", file, file.name);
      let headers: HttpHeaders = new HttpHeaders();
      headers.append('Content-Type', 'multipart/form-data');
      headers.append('Accept', 'application/json');
      return this.http.put(this.apiBase + "/" + doc.id, fdata, { headers: headers }).pipe(map(res => Deserialize(res, AssociationDocumentModel)));
    } else {
      return this.http.put(this.apiBase + "/" + doc.id, fdata).pipe(map(res => Deserialize(res, AssociationDocumentModel)));
    }

  }

}
