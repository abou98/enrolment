import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable, of, throwError } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { User } from "../models/auth.models";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { SecurelsService } from "./securels.service";
import { environment } from "src/environments/environment";

@Injectable({ providedIn: "root" })
export class AuthService {
  private currentUserSubject = new BehaviorSubject<any>(null);
  public currentUser$ = this.currentUserSubject.asObservable();
  private apiUrl = "https://medical.eyone.net/";

  constructor(
    private http: HttpClient,
    private router: Router,
    private modal: NgbModal,
    private securels: SecurelsService
  ) {}

  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser() {
    // return this.currentUserSubject.value;
    const encryptedUser = this.securels.getData("currentUser");
    if (encryptedUser) return encryptedUser;
    return null;
  }

  login(email: string, password: string) {
    return this.http
      .post<any>(this.apiUrl + "auth/login", {
        login: email,
        password,
      })
      .pipe(
        map((user) => {
          // login successful if there's a jwt token in the response
          if (user && user.access_token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            localStorage.setItem("currentUser", JSON.stringify(user));
            this.currentUserSubject.next(user);
            this.getUserRight(user.access_token).subscribe(
              (res) => {
                localStorage.setItem("userRight", JSON.stringify(res));
                return user;
              },
              (error) => {
                return throwError(error);
              }
            );
          }
        }),
        catchError((error) => {
          if (error) {
            return throwError(error);
          } else {
            return throwError(
              "Une erreur est survenue, veuillez réessayer ultérieurement"
            );
          }
        })
      );
  }

  loginnew(email: string, password: string): Observable<any> {
    return this.http
      .post<any>(environment.loginUrl + "auth/login", {
        login: email,
        password: password,
      })
      .pipe(
        tap((res) => {
          const encryptedUser = this.securels.saveData("currentUser", res);
          this.currentUserSubject.next(encryptedUser);
        }),
        catchError((error) => {
          return of(null);
        })
      );
  }

  getUserRight(authToken): Observable<any> {
    const theHeaders = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    });
    return this.http
      .get(this.apiUrl + "sapi/rest/v1/organism-users/rights", {
        headers: theHeaders,
      })
      .pipe(
        map((items: any) => items),
        catchError((error) => {
          if (error) {
            return throwError(error);
          } else {
            return throwError(
              "Une erreur est survenue, veuillez réessayer ultérieurement"
            );
          }
        })
      );
  }

  logout() {
    let sn = this.securels.getData("sn");
    this.securels.clearAllData();
    this.currentUserSubject.next(null);
    this.securels.saveData("sn", sn);
    this.modal.dismissAll();
    this.router.navigate(["/account/login"]);
    location.reload();
  }
}
