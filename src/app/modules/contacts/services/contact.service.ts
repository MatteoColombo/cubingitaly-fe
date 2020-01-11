import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  constructor(private http: HttpClient) { }

  public sendMail(value:any): Observable<any> {
    return this.http.post("/api/v0/contact", { "sender": value.name, "email": value.email, "subject": value.subject, "message": value.message });
  }
}
