import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ArticleService } from './article.service';
import { UserModel } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ArticleGuardService implements CanActivate {

  constructor(private router: Router, private authSVC: AuthService, private articleSVC: ArticleService) { }

  async canActivate(route: ActivatedRouteSnapshot) {
    let user: UserModel = await this.authSVC.user().toPromise();
    let role: string = route.data.requiredRole;
    if (user.id) {

      if (role === "admin") {
        if (user.canAdminArticles()) {
          return true;
        } else {
          this.router.navigate(['permesso-negato']);
        }
      } else if (role === "editor") {
        if (user.canEditArticles()) {
          return true;
        } else {
          this.router.navigate(['permesso-negato']);
        }
      }
    }

    this.router.navigate(['permesso-negato']);
  }
}