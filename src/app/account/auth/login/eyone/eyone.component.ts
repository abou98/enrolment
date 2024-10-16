import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';

import { ActivatedRoute, Router } from '@angular/router';
import { timeout } from 'rxjs/operators';

import { NgxSpinnerService } from 'ngx-spinner';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { AuthService } from 'src/app/core/services/authentication.service';
import { HelpersService } from 'src/app/core/services/helpers.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-eyone',
  templateUrl: './eyone.component.html',
  styleUrls: ['./eyone.component.scss']
})
export class EyoneComponent implements OnInit {

  loginForm: UntypedFormGroup;
  submitted = false;
  error = '';
  returnUrl: string;

  // set the currenr year
  year: number = new Date().getFullYear();

  // tslint:disable-next-line: max-line-length
  constructor(
    private http: HttpClient,
    private formBuilder: UntypedFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    public authenticationService: AuthenticationService,
    public authFackservice: AuthService,
    private spinnerService: NgxSpinnerService,
    private h: HelpersService
  ) {}

  ngOnInit() {
    document.body.removeAttribute('data-layout');
    document.body.classList.add('auth-body-bg');

    this.loginForm = this.formBuilder.group({
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ],
      password: ['', [Validators.required]],
    });

    // reset login status
    // this.authenticationService.logout();
    // get return url from route parameters or default to '/'
    // tslint:disable-next-line: no-string-literal
    this.returnUrl = this.route.snapshot.queryParams['serialNumber'] || '';
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  /**
   * Form submit
   */
  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    } else {
      this.spinnerService.show();
      this.http
        .post<any>(environment.loginUrl + 'auth/login', {
          login: this.f.email.value,
          password: this.f.password.value,
        })
        .pipe(timeout(120000))
        .toPromise()
        .then((res) => {
          this.spinnerService.hide();
          localStorage.setItem('currentUser', JSON.stringify(res));
          this.router.navigate(['/']).then(() => {
            if (this.returnUrl) {
              localStorage.setItem(
                'sn',
                JSON.stringify(this.route.snapshot.queryParams)
              );
              Swal.fire({
                toast: true,
                timer: 1500,
                position: 'top-end',
                background: '#FFD54F',
                showConfirmButton: false,
                text: 'Device successfully identified.',
              }).then(() => window.location.reload());
            } else {
              window.location.reload();
            }
          });
        })
        .catch((e) => {
          this.spinnerService.hide();
          this.h.handleRequestError(e);
        });
    }
  }

}
