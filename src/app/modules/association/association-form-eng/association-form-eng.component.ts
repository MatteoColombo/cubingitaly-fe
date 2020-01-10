import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssociationRequest } from 'src/app/models/association-request.model';
import { AssociationService } from '../services/association.service';
import { MatDialog } from '@angular/material';
import { TitleManagerService } from 'src/app/services/title-manager.service';
import { MetaManagerService } from 'src/app/services/meta-manager.service';
import { ConfirmEmailEngComponent } from 'src/app/components/confirm-email-eng/confirm-email-eng.component';

@Component({
  selector: 'app-association-form-eng',
  templateUrl: './association-form-eng.component.html',
  styleUrls: ['./association-form-eng.component.css'],
})
export class AssociationFormEngComponent implements OnInit, OnDestroy {



  form: FormGroup;

  constructor(private assSVC: AssociationService, private dialog: MatDialog, private titleSVC: TitleManagerService, private metaSVC: MetaManagerService) { }

  ngOnInit() {
    this.form = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'surname': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'birthplace': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'birthdate': new FormControl('', [Validators.required]),
      'city': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'street': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'num': new FormControl('', [Validators.required, Validators.maxLength(10)]),
      'state': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'country': new FormControl('', [Validators.required, Validators.maxLength(50)]),
      'email': new FormControl('', [Validators.required, Validators.maxLength(100), Validators.email]),
      'assLevel': new FormControl('', [Validators.required])
    });

    this.titleSVC.setTitle("Become a member");
    this.metaSVC.updateMeta("title", "Become a member");
    this.metaSVC.updateMeta("og:title", "");
    this.metaSVC.updateMeta("description", "To send the membership request, simply fill in the following form.");
    this.metaSVC.updateMeta("og:description", "To send the membership request, simply fill in the following form.");
  }

  ngOnDestroy(): void {
    this.metaSVC.resetMeta();
  }



  submit() {
    if (this.form.valid) {
      let request: AssociationRequest = new AssociationRequest();
      request = this.form.value;
      this.assSVC.sendMailEng(request).subscribe(res => {
        this.dialog.open(ConfirmEmailEngComponent, {
          minWidth: '200px',
        }).afterClosed().subscribe(() => {
          this.form.reset();
        });
      });
    }
  }
}
