import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class PassportGuard  {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const pmAuthenticated = JSON.parse(localStorage.getItem('pmAuthenticated'));
    if (pmAuthenticated) {
      return true;
    }
    this.router.navigate(['/passeport/search/pm']);
    return false;
  }
}
