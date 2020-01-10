import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-email-eng',
  templateUrl: './confirm-email-eng.component.html',
  styleUrls: ['./confirm-email-eng.component.css']
})
export class ConfirmEmailEngComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConfirmEmailEngComponent>) { }

  ngOnInit() {
  }

}
