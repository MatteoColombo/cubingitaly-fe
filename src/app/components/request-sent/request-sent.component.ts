import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-request-sent',
  templateUrl: './request-sent.component.html',
  styleUrls: ['./request-sent.component.css']
})
export class RequestSentComponent{

  constructor(public dialogRef: MatDialogRef<RequestSentComponent>) { }

}
