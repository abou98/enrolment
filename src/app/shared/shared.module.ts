import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiModule } from './ui/ui.module';
import {
  NgbAlertModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { TranslateModule } from '@ngx-translate/core';
import { NationalityNamePipe } from './pipes/nationality-name.pipe';
import { NationalityValuePipe } from './pipes/nationality-value.pipe';
import { NationalityLabelPipe } from './pipes/nationality-label.pipe';
import { ShowContextDirective } from './directives/show-context.directive';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from './modal.service';

@NgModule({
  declarations: [
    NationalityNamePipe,
    NationalityValuePipe,
    NationalityLabelPipe,
    ShowContextDirective,
  ],
  imports: [
    CommonModule,
    UiModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgbTypeaheadModule,
    FormsModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbNavModule,
    NgSelectModule,
    NgbAlertModule,
    UiSwitchModule,
    NgxSpinnerModule,
    PdfViewerModule,
    MatAutocompleteModule,
    NgbModule
  ],
  exports: [
    NationalityLabelPipe,
    NationalityValuePipe,
    NationalityNamePipe,
    ShowContextDirective,
    NgbModule,
  ],
  providers:[
    ModalService
  ]
})
export class SharedModule {}
