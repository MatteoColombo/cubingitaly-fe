import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class PageAdminGuardService implements CanActivate {

  constructor(private router: Router, private authSVC: AuthService) { }

  async canActivate(route: ActivatedRouteSnapshot) {
    let user: UserModel = await this.authSVC.user().toPromise();
    if (user.id && user.canEditPages()) {
      return true;
    }
    this.router.navigate(['permesso-negato']);
  }
}
