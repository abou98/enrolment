import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { NgbDropdownModule } from "@ng-bootstrap/ng-bootstrap";
import { NgClickOutsideDirective } from "ng-click-outside2";
import { LanguageService } from "../../core/services/language.service";
import { TranslateModule } from "@ngx-translate/core";

import { TopbarComponent } from "./topbar/topbar.component";
import { FooterComponent } from "./footer/footer.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { RightsidebarComponent } from "./rightsidebar/rightsidebar.component";
import { HorizontaltopbarComponent } from "./horizontaltopbar/horizontaltopbar.component";
import { HorizontalnavbarComponent } from "./horizontalnavbar/horizontalnavbar.component";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgScrollbarModule, NG_SCROLLBAR_OPTIONS } from "ngx-scrollbar";

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    RightsidebarComponent,
    HorizontaltopbarComponent,
    HorizontalnavbarComponent,
  ],
  imports: [
    CommonModule,
    TranslateModule,
    NgScrollbarModule,
    NgbDropdownModule,
    NgClickOutsideDirective,
    RouterModule,
    NgxSpinnerModule,
    NgScrollbarModule,
  ],
  exports: [
    TopbarComponent,
    FooterComponent,
    SidebarComponent,
    RightsidebarComponent,
    HorizontaltopbarComponent,
    HorizontalnavbarComponent,
  ],
  providers: [LanguageService],
})
export class SharedModule {}
