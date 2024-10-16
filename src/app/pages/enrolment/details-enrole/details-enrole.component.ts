import { Component, DestroyRef, inject, TemplateRef } from '@angular/core';
import { EnrolmentService } from '../enrolment.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgxSpinnerService } from "ngx-spinner";
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-details-enrole',
  templateUrl: './details-enrole.component.html',
  styleUrls: ['./details-enrole.component.scss']
})


export class DetailsEnroleComponent {

  serviceNotification = inject(EnrolmentService)
  spinnerService = inject(NgxSpinnerService);
  destroyRef = inject(DestroyRef)
   private modalService = inject(NgbModal);

  organismId: number;
   organismes = [];
 breadCrumbItems: Array<{}>;
     isCollapsed = false;
     closeResult: string = '';
  error: '';
  paginateData: any[] = [];
  datas: any[] = [];
  page$ = 1;
  pageSize = 10;
  collectionSize = 0;
  startIndex: number;
  endIndex: number;
  clickedButton: string;

  form: FormGroup;
  submitted = false;

  enrole: any =  {
    eyoneInternalId: '34DRRRRRR',
    firstName: 'Jane',
    lastName: 'Doe',
    email: '3yS7z@example.com', 
    phone: '77 632 05 04',
    mobileNumber: '774567894',
   sex:{
      message: 'Femme'    
    },
    age: 25,
    birthday: '01/01/1995'
   
  }


    regions = [
    {
      id: 1,
      name: 'Dakar',
      departements: [
        {
          id: 1,
          name: 'Dakar',
        },
       {
        id: 2,
        name: 'Keur Massar'
       }
      ]
    },
    {
      id: 2,
      name: 'Thies',
      departements: [
        {
          id: 1,
          name: 'Thies',
        },
       {
        id: 2,
         name: 'Mbour'
       }
      ]
    },
    
  ]

  sexes = [
   
    {
      id: 1,
      name: 'Masculin',
    },
    {
      id: 2,
      name: 'Feminin',
    }
  ];
 ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Liste des contacts', active: true }];
    this.getPaginatedData()
    this.clickedButton = 'details-enrole'



    this.form = new FormGroup({
       firstName: new FormControl(this.enrole.firstName, [Validators.required]),
    lastName: new FormControl(this.enrole.lastName, [Validators.required]),
    telephone: new FormControl(this.enrole.telephone, [Validators.required]),
    email: new FormControl(this.enrole.email, [Validators.required]),
    region: new FormControl(this.enrole.region, [Validators.required]),
    departement: new FormControl(this.enrole.departement, [Validators.required]),
    nin: new FormControl(this.enrole.nin, [Validators.required]),
    dateOfBirth: new FormControl(this.enrole.dateOfBirth, [Validators.required]),
    organismId: new FormControl(this.enrole.organismId, [Validators.required]),
    sexeId: new FormControl(this.enrole.sexeId, [Validators.required]),
    })
  }
  
  getPaginatedData() {  
   
  }

  get formControl () {
    return this.form.controls;
  }

 selectMenu(menu){
    this.clickedButton=menu
  }
modifier(){
  console.log(this.form.value);
}

  open(content: TemplateRef<any>) {
    this.modalService.open(content,  { ariaLabelledBy: 'modal-basic-title', size: 'lg' }).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      },
    );
  }

    private getDismissReason(reason: any): string {
    switch (reason) {
      case ModalDismissReasons.ESC:
        return 'by pressing ESC';
      case ModalDismissReasons.BACKDROP_CLICK:
        return 'by clicking on a backdrop';
      default:
        return `with: ${reason}`;
    }
  }





}
