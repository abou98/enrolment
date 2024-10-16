import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrolementRoutingModule } from './enrolment-routing.module';
import { EnroleComponent} from './enrole/enrole.component';
import { UiModule } from 'src/app/shared/ui/ui.module';
import { ListEnroleComponent } from './list-enrole/list-enrole.component';
import { NgbDropdownModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatInputModule } from "@angular/material/input";
import { NgxSpinnerModule } from 'ngx-spinner';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { TranslateModule } from '@ngx-translate/core';
import { DetailsEnroleComponent } from './details-enrole/details-enrole.component';

@NgModule({
  declarations: [
    EnroleComponent,
    ListEnroleComponent,
    DetailsEnroleComponent
  ],
  imports: [
    CommonModule,
    EnrolementRoutingModule,
    UiModule,
    NgbPaginationModule,
    FormsModule,
    NgbDropdownModule,
    ReactiveFormsModule,
    NgSelectModule,
    MatAutocompleteModule,
    MatInputModule,
    NgxSpinnerModule,
    DropzoneModule,
    TranslateModule
    
  ]
})
export class EnrolementModule { }
