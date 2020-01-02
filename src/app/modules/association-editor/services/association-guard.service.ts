import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AssociationGuardService implements CanActivate {


  constructor(private router: Router, private authSVC: AuthService) { }

  async canActivate(route: ActivatedRouteSnapshot) {
    let user: UserModel = await this.authSVC.user().toPromise();
    if (user.id) {
      if (user.canManageAssociation()) {
        return true;
      }
    }
    this.router.navigate(['permesso-negato']);
  }
}