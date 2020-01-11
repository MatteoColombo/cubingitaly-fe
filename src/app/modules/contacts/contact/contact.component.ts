import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators, FormGroup, FormGroupDirective } from '@angular/forms';
import { ContactService } from '../services/contact.service';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { MatDialog } from '@angular/material/dialog';
import { EmailSentDialogComponent } from 'src/app/components/email-sent-dialog/email-sent-dialog.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  @ViewChild(FormGroupDirective,{static:true}) formRef: FormGroupDirective;
  form:FormGroup;

  constructor(private dialog: MatDialog, private titleSVC: TitleManagerService, private contactSVC: ContactService, private metaSVC: MetaManagerService) { }

  ngOnInit() {
    this.titleSVC.setTitle("Contatti");
    this.metaSVC.updateMeta("title", "Contatti");
    this.metaSVC.updateMeta("og:title", "Contatti");
    this.metaSVC.updateMeta("description", "Compila il form sottostante e sarai ricontattato al più presto via email.");
    this.metaSVC.updateMeta("og:description", "Compila il form sottostante e sarai ricontattato al più presto via email.");
    this.form= new FormGroup({
      'name': new FormControl('',[Validators.required,Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required,Validators.email]),
      'subject': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'message': new FormControl('',[Validators.required,Validators.minLength(3)]),
    })
  }

  ngOnDestroy() {
    this.metaSVC.resetMeta();
  }


  submit() {
    if (this.form.valid) {
      this.contactSVC.sendMail(this.form.value)
        .subscribe(() => {
          this.dialog.open(EmailSentDialogComponent, {
            minWidth: '200px',
          }).afterClosed().subscribe(() => {
            this.formRef.resetForm();
          });
        });
    }
  }
}

