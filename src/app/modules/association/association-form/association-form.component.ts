import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-association-form',
  templateUrl: './association-form.component.html',
  styleUrls: ['./association-form.component.css'],
})
export class AssociationFormComponent implements OnInit {

  form: FormGroup;

  constructor() { }

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
  }


  submit() {
    if (this.form.valid) {
      
    }
  }
}
