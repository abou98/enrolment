import { Component, EventEmitter, Inject, OnInit, Output } from "@angular/core";
import { DOCUMENT } from "@angular/common";
import { CookieService } from "ngx-cookie-service";
import { NavigationEnd, NavigationStart, Router } from "@angular/router";
import { AuthService } from "../../../core/services/authentication.service";
import { LanguageService } from "../../../core/services/language.service";
import { environment } from "../../../../environments/environment";
import { filter } from "rxjs/operators";
import { UrlService } from "../../../shared/url.service";
import { SecurelsService } from "src/app/core/services/securels.service";

@Component({
  selector: "app-topbar",
  templateUrl: "./topbar.component.html",
  styleUrls: ["./topbar.component.scss"],
})
export class TopbarComponent implements OnInit {
  element: any;
  configData: any;
  cookieValue;
  flagvalue;
  countryName;
  valueset: string;
  currentUser: any;
  projectDesc: string = environment.projectDesc;
  projectName: string = environment.projectName;

  listLang = [
    { text: "Français", flag: "assets/images/flags/french.jpg", lang: "fr" },
    { text: "English", flag: "assets/images/flags/uk.jpg", lang: "en" },
  ];
  previousUrl: string = null;
  currentUrl: string = null;

  private theURl: string;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private router: Router,
    private authFackservice: AuthService,
    public languageService: LanguageService,
    public cookiesService: CookieService,
    private urlService: UrlService,
    private securels: SecurelsService
  ) {
    this.theURl = router.url;
  }

  @Output() mobileMenuButtonClicked = new EventEmitter();
  @Output() settingsButtonClicked = new EventEmitter();

  ngOnInit(): void {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        const url = event.url;
        if (
          !(
            url.includes("readinsuredcard") ||
            url.includes("consultation/create") ||
            url.includes("hospitalisation/create") ||
            url.includes("visite/create") ||
            url.includes("ambulatory/create") ||
            url.includes("pharmacy/create") ||
            url.includes("analysis/create") ||
            url.includes("imaging/create") ||
            url.includes("quotation/create")
          )
        ) {
          this.securels.clearData("theSelected");
          this.securels.clearData("insurerInternalId");
          this.securels.clearData("insurerHideFacturationDetail");
          this.securels.clearData("beneficiaires");
          this.securels.clearData("insurerExternalId");
        }
        if (event.url !== "/passeport") {
          this.securels.saveData("pmAuthenticated", false);
        }
      }
    });

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.previousUrl = this.currentUrl;
        this.currentUrl = event.url;
        if (!this.previousUrl && this.theURl.includes("/prestation/new/")) {
          this.urlService.setPreviousUrl("/prestation/new/");
        } else {
          this.urlService.setPreviousUrl(this.previousUrl);
        }
      });

    this.element = document.documentElement;
    this.configData = {
      suppressScrollX: true,
      wheelSpeed: 0.3,
    };

    this.currentUser = this.securels.getData("currentUser");

    this.cookieValue = this.cookiesService.get("lang");
    const val = this.listLang.filter((x) => x.lang === this.cookieValue);
    this.countryName = val.map((element) => element.text);
    if (val.length === 0) {
      if (this.flagvalue === undefined) {
        this.valueset = "assets/images/flags/french.jpg";
      }
    } else {
      this.flagvalue = val.map((element) => element.flag);
    }
  }

  /**
   * Toggle the menu bar when having mobile screen
   */
  toggleMobileMenu(event: any) {
    event.preventDefault();
    this.mobileMenuButtonClicked.emit();
  }

  /**
   * Fullscreen method
   */
  fullscreen() {
    document.body.classList.toggle("fullscreen-enable");
    if (
      !document.fullscreenElement &&
      !this.element.mozFullScreenElement &&
      !this.element.webkitFullscreenElement
    ) {
      if (this.element.requestFullscreen) {
        this.element.requestFullscreen();
      } else if (this.element.mozRequestFullScreen) {
        /* Firefox */
        this.element.mozRequestFullScreen();
      } else if (this.element.webkitRequestFullscreen) {
        /* Chrome, Safari and Opera */
        this.element.webkitRequestFullscreen();
      } else if (this.element.msRequestFullscreen) {
        /* IE/Edge */
        this.element.msRequestFullscreen();
      }
    } else {
      if (this.document.exitFullscreen) {
        this.document.exitFullscreen();
      } else if (this.document.mozCancelFullScreen) {
        /* Firefox */
        this.document.mozCancelFullScreen();
      } else if (this.document.webkitExitFullscreen) {
        /* Chrome, Safari and Opera */
        this.document.webkitExitFullscreen();
      } else if (this.document.msExitFullscreen) {
        /* IE/Edge */
        this.document.msExitFullscreen();
      }
    }
  }

  /**
   * Translate language
   */
  setLanguage(text: string, lang: string, flag: string) {
    this.countryName = text;
    this.flagvalue = flag;
    this.cookieValue = lang;
    this.languageService.setLanguage(lang);
  }

  /**
   * Logout the user
   */
  logout() {
    this.authFackservice.logout();
  }
}
