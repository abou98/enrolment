import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from "@angular/router";
import { Observable } from "rxjs";
import { HelpersService } from "../services/helpers.service";

@Injectable({
  providedIn: "root",
})
export class UserRightsGuard implements CanActivate {
  constructor(private h: HelpersService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.h.hasRight(state)) return true;
    else {
      this.h.handleRedicectionAfterGuardFailed();
      return false;
    }
  }
}
