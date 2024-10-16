import { Component, OnInit, TemplateRef } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import Swal from "sweetalert2";

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EnrolmentService } from '../enrolment.service';

@Component({
  selector: 'app-list-enrole',
  templateUrl: './list-enrole.component.html',
  styleUrls: ['./list-enrole.component.scss']
})
export class ListEnroleComponent {

    paginateData = [
  {
    eyoneInternalId: '34DRRRRRR',
    firstName: 'John',
    lastName: 'Doe',
    email: '3yS7z@example.com', 
    mobileNumber: '776320504', 
    sex:{
      message: 'Homme'
    },
    age: 30 ,
    birthday: '01/01/1990'
  },
  {
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
 ];

  page$ = 1;
  pageSize = 10;
  collectionSize = this.paginateData.length;
  startIndex = (this.page$ - 1) * this.pageSize + 1;
  endIndex = (this.page$ - 1) * this.pageSize + this.pageSize;
  offset = this.page$ - 1;
  search = "";
  error: any;
  closeResult = "";

  searching = false;


  searchForm: FormGroup;
  constructor(private modalService: NgbModal,
              private service: EnrolmentService,
               private spinnerService: NgxSpinnerService,
  ) { }

  ngOnInit(): void {
    this.searchForm = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      phoneNumber: new FormControl('', Validators.required),
      code: new FormControl('', Validators.required),
    });
    this.getPaginatedData();
  }

    searchModal(searchModalParam: any) {
    this.modalService.open(searchModalParam, {
      centered: true,
      backdrop: "static",
      keyboard: false,
    });
  }


  async getPaginatedData() {
    const offset = this.page$ - 1;
    await this._fetchData(offset, this.pageSize, this.search);

    this.startIndex = (this.page$ - 1) * this.pageSize + 1;
    this.endIndex = (this.page$ - 1) * this.pageSize + this.pageSize;
    if (this.endIndex > this.collectionSize) {
      this.endIndex = this.collectionSize;
    }
  }

    async _fetchData(offset, limit, search) {
    if (search === "") {
      this.searching = false;
    }
    this.spinnerService.show();
    this.spinnerService.hide();
    // await this.service
    //   .findAllEnroles("offset=" + offset + "&limit=" + limit + search)
    //   .subscribe(
    //     (res) => {
    //       this.paginateData = res.content;
    //       this.collectionSize = res.totalElements;
    //       this.spinnerService.hide();
    //     },
    //     (error) => {
    //       this.error = error ? error : "";
    //       Swal.fire("Erreur", this.error.error, "error");
    //       this.spinnerService.hide();
    //     }
    //   );
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

