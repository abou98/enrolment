import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UiModule } from "../shared/ui/ui.module";
import { WidgetModule } from "../shared/widget/widget.module";
import { PagesRoutingModule } from "./pages-routing.module";
import {
  NgbNavModule,
  NgbDropdownModule,
  NgbTooltipModule,
  NgbAlertModule,
  NgbPaginationModule,
  NgbDatepickerModule,
} from "@ng-bootstrap/ng-bootstrap";
import { NgApexchartsModule } from "ng-apexcharts";
import { FullCalendarModule } from "@fullcalendar/angular";
import { DndModule } from "ngx-drag-drop";
import { PerfectScrollbarModule } from "ngx-perfect-scrollbar-portable";
import { PERFECT_SCROLLBAR_CONFIG } from "ngx-perfect-scrollbar-portable";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar-portable";
import { LeafletModule } from "@asymmetrik/ngx-leaflet";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TranslateModule } from "@ngx-translate/core";
import { NgSelectModule } from "@ng-select/ng-select";
import { NgxSpinnerModule } from 'ngx-spinner';
// import { MatLegacyAutocompleteModule as MatAutocompleteModule } from "@angular/material/legacy-autocomplete";
import { FilterPipeModule } from "ngx-filter-pipe";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
const DEFAULT_PERFECT_SCROLLBAR_CONFIG: PerfectScrollbarConfigInterface = {
  suppressScrollX: true,
  wheelSpeed: 0.3,
};

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PagesRoutingModule,
    UiModule,
    FilterPipeModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbTooltipModule,
    NgApexchartsModule,
    PerfectScrollbarModule,
    MatAutocompleteModule,
    DndModule,
    FullCalendarModule,
    LeafletModule,
    WidgetModule,
    TranslateModule,
    NgbAlertModule,
    NgbPaginationModule,
    NgSelectModule,
    NgbDatepickerModule,
      NgxSpinnerModule,
      TranslateModule
  ],
  providers: [
    {
      provide: PERFECT_SCROLLBAR_CONFIG,
      useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG,
    },
  ],
})
export class PagesModule {}
