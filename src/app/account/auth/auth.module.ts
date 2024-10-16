import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReactiveFormsModule } from "@angular/forms";

import { NgbAlertModule } from "@ng-bootstrap/ng-bootstrap";

import { UiModule } from "../../shared/ui/ui.module";
import { AuthRoutingModule } from "./auth-routing";

import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { PasswordresetComponent } from "./passwordreset/passwordreset.component";
import { TranslateModule } from "@ngx-translate/core";
import { LanguageService } from "src/app/core/services/language.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "src/app/shared/shared.module";
import { MsasComponent } from "./login/msas/msas.component";
import { DouanesComponent } from "./login/douanes/douanes.component";
import { EyoneComponent } from "./login/eyone/eyone.component";

@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    PasswordresetComponent,
    MsasComponent,
    DouanesComponent,
    EyoneComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbAlertModule,
    UiModule,
    AuthRoutingModule,
    TranslateModule,
    NgxSpinnerModule,
    SharedModule,
  ],
  providers: [LanguageService],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AuthModule {}
