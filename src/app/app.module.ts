import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, LOCALE_ID, NgModule } from "@angular/core";

import {
  HttpClientModule,
  HTTP_INTERCEPTORS,
  HttpClient,
} from "@angular/common/http";

import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { LayoutsModule } from "./layouts/layouts.module";
import { PagesModule } from "./pages/pages.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { JwtInterceptor } from "./core/helpers/jwt.interceptor";

import { NgxSpinnerModule } from "ngx-spinner";
import { SharedModule } from "./layouts/shared/shared.module";
import { ReactiveFormsModule } from "@angular/forms";
import {
  NgbActiveModal,
  NgbDateAdapter,
  NgbDateParserFormatter,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DatePipe, registerLocaleData } from "@angular/common";
import { UiSwitchModule } from "ngx-ui-switch";
import localeFr from "@angular/common/locales/fr";
import { ConnectionServiceModule } from "ng-connection-service";
import { provideUserIdleConfig } from "angular-user-idle";
import { CustomAdapter } from "./core/services/customAdapter";
import { CustomDateParserFormatter } from "./core/services/customDateParserFormatter";
import { DropzoneConfigInterface, DROPZONE_CONFIG } from "ngx-dropzone-wrapper";
import { NgIdleModule } from "@ng-idle/core";
import { CustomDateFormatter } from "./shared/custom-date-formatter";

export function createTranslateLoader(http: HttpClient): any {
  return new TranslateHttpLoader(http, "assets/i18n/", ".json");
}

registerLocaleData(localeFr, "fr");

const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: "https://httpbin.org/post",
  maxFilesize: 50,
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PagesModule,
    LayoutsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
    NgxSpinnerModule,
    SharedModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    UiSwitchModule,
    ConnectionServiceModule,
    NgIdleModule.forRoot(),
  ],
  exports: [NgxSpinnerModule],
  providers: [
    provideUserIdleConfig({ idle: 7200, timeout: 90, ping: 60 }),
    { provide: LOCALE_ID, useValue: "fr-FR" },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    NgbActiveModal,
    DatePipe,
    { provide: NgbDateAdapter, useClass: CustomAdapter },
    { provide: NgbDateParserFormatter, useClass: CustomDateParserFormatter },
    {
      provide: DROPZONE_CONFIG,
      useValue: DEFAULT_DROPZONE_CONFIG,
    },
    { provide: NgbDateParserFormatter, useClass: CustomDateFormatter },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
