import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { LangChangeEvent, TranslateService } from "@ngx-translate/core";
import { SecurelsService } from "src/app/core/services/securels.service";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})

/**
 * Dashboard Component
 */
export class DashboardComponent implements OnInit {
  userRight: any;
  currentUser: any;
  home: any;
  doctor: any;

  constructor(
    private translate: TranslateService,
    private route: ActivatedRoute,
    private securels: SecurelsService
  ) {}

  // bread crumb items
  breadCrumbItems: Array<{}>;

  ngOnInit(): void {
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.getTranslations();
    });
    this.getTranslations();

    let currentUser = this.securels.getData("currentUser");
    this.userRight = currentUser?.userRights;
    this.doctor = currentUser?.doctor;
    this.breadCrumbItems = [{ label: this.home, active: true }];
  }

  getTranslations() {
    this.translate.get("SHARED.HOME").subscribe((text: string) => {
      this.home = text;
    });
  }
}
