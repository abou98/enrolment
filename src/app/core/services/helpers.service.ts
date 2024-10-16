import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Swal from "sweetalert2";
import { AuthService } from "./authentication.service";
import { UntypedFormGroup } from "@angular/forms";
import { Router, RouterStateSnapshot } from "@angular/router";
import { SecurelsService } from "./securels.service";

@Injectable({
  providedIn: "root",
})
export class HelpersService {
  constructor(
    private http: HttpClient,
    private auth: AuthService,
    private router: Router,
    private securels: SecurelsService
  ) {}

  clearObj(obj) {
    for (const o in obj) {
      delete obj[o];
    }
  }

  getImage(url): Observable<Blob> {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const token = currentUser.access_token;
    let headers = new HttpHeaders();
    headers = headers.append(
      "Content-Type",
      "application/json, text/plain, */*"
    );
    headers = headers.append("Authorization", "Bearer " + token);

    return this.http.get<Blob>(`${url}`, {
      headers,
      responseType: "blob" as "json",
    });
  }

  generateChartColors() {
    return function () {
      const r = Math.floor(Math.random() * 255);
      const g = Math.floor(Math.random() * 255);
      const b = Math.floor(Math.random() * 255);
      return "rgb(" + r + "," + g + "," + b + ")";
    };
  }

  handleFormAbility(type: any, form: UntypedFormGroup) {
    if (type === "SPECIFIC_PERIOD") {
      form.get("debut").enable();
      form.get("fin").enable();
    } else {
      form.get("debut").disable();
      form.get("fin").disable();
    }
  }

  handleRequestError(e): any {
    if (e.name === "TimeoutError") {
      Swal.fire({
        icon: "info",
        text: "La requête a expiré. Veuillez réessayer plus tard.",
        showConfirmButton: false,
        timer: 5000,
      });
    } else {
      if (e.status === 401) {
        if (e.error.errorCode === "REQUIRED_USER") {
          this.auth.logout();
        } else if (e.error.errorCode === "INVALID_CREDENTIALS") {
          Swal.fire({
            title: "Erreur",
            icon: "error",
            text: e.error?.message,
            showConfirmButton: false,
            timer: 5000,
          });
        } else {
          this.auth.logout();
        }
      } else {
        Swal.fire({
          title: "Erreur",
          icon: "error",
          text: e.error?.message
            ? e.error?.message
            : "Une erreur est survenue. Veuillez réessayer plus tard.",
          showConfirmButton: true,
          confirmButtonText: "OK",
          timer: 5000,
        });
      }
    }
  }

  handleRedicectionAfterGuardFailed() {
    this.router.navigate(["/"]);
  }

  hasRight(state: RouterStateSnapshot) {
    const currentUser = this.securels.getData("currentUser");
    const userRights = currentUser ? currentUser.userRights : null;

    const pathMappings: { [key: string]: string | boolean } = {
      "/formulaires": userRights?.hasShortcutFormsMenu,
    };

    const dynamicPathMappings: { [key: string]: string } = {
      "/planning/": "hasMedicalPlanificationRight",
      "/prestation/new/\\d+": "hasMedicalSellPrestationEditRight",
      "/prestation/new/\\d+/\\w+/create": "hasMedicalSellPrestationEditRight",
    };

    // Check dynamic path mappings first
    for (const path in dynamicPathMappings) {
      if (new RegExp(path).test(state.url)) {
        return userRights?.[dynamicPathMappings[path]];
      }
    }

    // Fallback to static path mappings
    return pathMappings[state.url] ?? false;
  }
}
