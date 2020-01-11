import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input('menu') menuUrls: any[];
  @Input() ngModel: boolean = false;
  @Output() ngModelChange = new EventEmitter<boolean>();
  user: UserModel;
  auth: AuthService
  constructor(auth: AuthService, private router: Router) { 
    this.auth=auth;
  }

  ngOnInit() {
    this.auth.user().subscribe((res: UserModel) => this.user = res);
  }

  sideMenuButtonClicked() {
    this.ngModel = !this.ngModel;
    this.ngModelChange.emit(this.ngModel);
  }

}
