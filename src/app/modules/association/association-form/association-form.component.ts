import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssociationRequest } from 'src/app/models/association-request.model';
import { AssociationService } from '../services/association.service';
import { MatDialog } from '@angular/material';
import { RequestSentComponent } from 'src/app/components/request-sent/request-sent.component';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';

@Component({
  selector: 'app-association-form',
  templateUrl: './association-form.component.html',
  styleUrls: ['./association-form.component.css'],
})
export class AssociationFormComponent implements OnInit, OnDestroy {



  form: FormGroup;

  constructor(private assSVC: AssociationService, private dialog: MatDialog, private titleSVC: TitleManagerService, private metaSVC: MetaManagerService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'surname': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'birthplace': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'birthdate': new FormControl('', [Validators.required]),
      'fiscalCode': new FormControl('', [Validators.pattern(/^[a-zA-Z]{6}[0-9]{2}[abcdehlmprstABCDEHLMPRST]{1}[0-9]{2}([a-zA-Z]{1}[0-9]{3})[a-zA-Z]{1}$/)]),
      'city': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'street': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'num': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'state': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'country': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'email': new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      'assLevel': new FormControl('', [Validators.required])
    });

    this.titleSVC.setTitle("Associarsi");
    this.metaSVC.updateMeta("title", "Associarsi");
    this.metaSVC.updateMeta("og:title", "Associarsi");
    this.metaSVC.updateMeta("description", "Compila il form sottostante per inviare la richiesta di associazione.");
    this.metaSVC.updateMeta("og:description", "Compila il form sottostante per inviare la richiesta di associazione.");
  }

  ngOnDestroy(): void {
    this.metaSVC.resetMeta();
  }



  submit() {
    if (this.form.valid) {
      let request: AssociationRequest = new AssociationRequest();
      request = this.form.value;
      this.assSVC.sendMail(request).subscribe(res => {
        this.dialog.open(RequestSentComponent, {
          minWidth: '200px',
        }).afterClosed().subscribe(() => {
          this.form.reset();
        });
      });
    }
  }
}
