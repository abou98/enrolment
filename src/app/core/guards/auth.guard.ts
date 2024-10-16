import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { AuthenticationService } from '../services/auth.service';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class AuthGuard  {
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (environment.defaultauth === 'firebase') {
      const currentUser = this.authenticationService.currentUser();
      if (currentUser) {
        return true;
      }
    } else {
      const currentUser = localStorage.getItem('currentUser');
      if (currentUser) {
        return true;
      }
    }
    this.router.navigate(['/account/login'], {
      queryParams: route.queryParams.serialNumber
        ? route.queryParams
        : { returnUrl: state.url },
      skipLocationChange: true,
    });
    return false;
  }
}
