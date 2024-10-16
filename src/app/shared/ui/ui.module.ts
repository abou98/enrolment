import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagetitleComponent } from './pagetitle/pagetitle.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatLegacyAutocompleteModule as MatAutocompleteModule } from '@angular/material/legacy-autocomplete';
import { MatLegacyOptionModule as MatOptionModule } from '@angular/material/legacy-core';
import { NgSelectModule } from '@ng-select/ng-select';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TranslateModule } from '@ngx-translate/core';
import {
  NgbAlertModule,
  NgbDatepickerModule,
  NgbDropdownModule,
  NgbNavModule,
  NgbPaginationModule,
  NgbTooltipModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { CustomPipeModule } from '../custom-pipe.module';
import { EditeurComponent } from './editeur/editeur.component';
import { MenuRightComponent } from './menu-right/menu-right.component';

@NgModule({
  declarations: [
    PagetitleComponent,
    EditeurComponent,
    MenuRightComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatAutocompleteModule,
    MatOptionModule,
    NgSelectModule,
    UiSwitchModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbTooltipModule,
    NgbAlertModule,
    NgbNavModule,
    NgbDropdownModule,
    NgbPaginationModule,
    NgxSpinnerModule,
    PdfViewerModule,
    NgbTypeaheadModule,
    NgbDatepickerModule,
    CustomPipeModule,
    CKEditorModule,
  ],
  exports: [
    PagetitleComponent,
    EditeurComponent,
    MenuRightComponent,
  ],
})
export class UiModule {}
