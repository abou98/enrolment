import { Component, DestroyRef, inject } from '@angular/core';
import { EnrolmentService } from '../enrolment.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enrole',
  templateUrl: './enrole.component.html',
  styleUrls: ['./enrole.component.scss']
})
export class EnroleComponent {


  // spinnerService = inject()
 showNumber = false;
  breadCrumbItems: Array<{}>;
  patient: any;
  selectedPatient: any;
  patients: [];
  users: [];
  user:any;
  selectedUser: any;
  submit = false;
  organismes: [];
  showOTPForm = false;
  submitted = false;
  
  showEnrolForm = false;

  enrolFrom: FormGroup

  showFromNumber = true;
  channels = [
    {
      id: 1,
      name: 'SMS',
    },
    {
      id: 2,
      name: 'EMAIL',
    },
    {
      id: 3, 
      name: 'WHATSAPP',
    },
    {
      id: 4,
      name: 'PUSH NOTIFICATION',
    },
    {
      id: 5,
      name: 'APPEL',
    },
  ];

    closed$ = new Subject<void>();

  typeDestinatary = [
    {
      id: 1,
      name: 'PATIENT',
    },
    {
      id: 2,
      name: 'USER',
    }
  ]

  motifs = [
    {
      code: 'APPOINTMENT_REMINDER',
      label: 'Rappel de rendez-vous'
    },
    {
      code: 'MEDICATION_REMINDER',
      label: 'Rappel de prise de médicaments'
    },
    {
      code: 'LAB_RESULTS_AVAILABLE',
      label: 'Résultats de laboratoire disponibles'
    },
    {
      code: 'GENERAL_INFORMATION',
      label: 'Informations générales'
    },
    {
      code: 'BILLING_NOTIFICATION',
      label: 'Notification de facturation'
    },
    {
      code: 'EMERGENCY_ALERT',
      label: 'Alerte d\'urgence'
    },
    {
      code: 'OTHER',
      label: 'Autre motif'
    }
  ]
  form: FormGroup;
  optForm: FormGroup;


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
  private readonly service = inject(EnrolmentService)
  private readonly destroyRef = inject(DestroyRef)


  constructor(private router: Router) { }
  
    ngOnInit(): void {
    this.breadCrumbItems = [{ label: 'Messages', active: true }];
    this.getOrganism();

    this.form = new FormGroup({
      destinatary: new FormControl(null,),
      destinataryId: new FormControl(null),
      channel: new FormControl(null, Validators.required),
      destinataryType: new FormControl('PATIENT', Validators.required),
      content: new FormControl(null, Validators.required),
      organismId: new FormControl(null, Validators.required),
      userId: new FormControl(null),
      msgMotif: new FormControl(null, Validators.required),
      patient: new FormControl(null),
      user: new FormControl(null),
      patientId: new FormControl(null),
    })  
    
    this.optForm = new FormGroup({
      otp: new FormControl(null, Validators.required),
    })
    
    this.enrolFrom = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    telephone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    region: new FormControl(null, [Validators.required]),
    departement: new FormControl(null, [Validators.required]),
    nin: new FormControl('', [Validators.required]),
    dateOfBirth: new FormControl('', [Validators.required]),
    organismId: new FormControl(null, [Validators.required]),
    sexeId: new FormControl(null, [Validators.required]),

  });

     this.getPatients();
     this.getUsers();
  }


  get formControl () {
    return this.form.controls;
  }

  get formEnrolControl () {
    return this.enrolFrom.controls;
  }

  handleClosed(event) {
    this.closed$.next();
  }

  getOrganism(){
    this.service.getOrganisms().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(
      
      {
        next: (data) => {
          this.organismes = data;
        },
        error: (err) => {
        
        }
      }
    )
  }

  get optFormControl() {
    return this.optForm.controls;
  }


  getPatients(){
    this.form.get("patient").valueChanges.
    pipe(debounceTime(500), distinctUntilChanged()).subscribe((value) => {
      if (value) {
        this.service.getAllPatients(value).pipe(takeUntilDestroyed(this.destroyRef)).subscribe(
          {
            next: (data) => {
              this.patients = data;
            },
            error: (err) => {
            
            }
          }
          
        )
      }
    })
  }


  getUsers(){
    this.form.get("user").valueChanges.pipe(debounceTime(500), distinctUntilChanged()).subscribe(
      (value) => {
        if(value){
          this.service.getStaff().pipe(takeUntilDestroyed(this.destroyRef)).subscribe(
            {
              next: (data) => {
                this.users = data.filter(user => 
                  
                 user && (user.completeName?.toLowerCase().includes(value.toLowerCase()) || user.username?.toLowerCase().includes(value.toLowerCase()))
              );
              },
              error: (err) => {
              
              }
            }
            
          )
        }
      }
    )
  }

  onSelectPatient2(patient) {
    if(!patient.mobileNumber){
      this.showNumber = true;
    }else{
      this.showNumber = false;
      this.form.patchValue({ destinatary: patient.mobileNumber });
    }
    
    this.patient = patient.name;
    this.selectedPatient = patient;
    this.form.patchValue({ patient: patient.fullName });
    this.form.patchValue({ patientId: patient.patientId });
    this.form.patchValue({ destinataryId: patient.patientId });
    console.log('Patient', patient)
    this.enrolFrom.patchValue(patient)
    
  }


  onSelectUser(user) {
    this.user = user;
    this.selectedUser = user;
    this.form.patchValue({ user: user.completeName });
    this.form.patchValue({ userId: user.identifier });  
  }


  send() {

    this.submit = true;
    let toArray = [];
    if(this.form.value.destinataryType == 'PATIENT'){
      const { user, userId, ...filteredData } = this.form.value;
        toArray.push(filteredData);
    }

    if(this.form.value.destinataryType == 'USER'){
      const { patient, patientId, user, ...filteredData } = this.form.value;
      filteredData.destinataryId = this.form.value.userId
        toArray.push(filteredData);
    }
    
    this.service.send(toArray).pipe(takeUntilDestroyed(this.destroyRef)).subscribe( {

           next: (data) => {
          Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Notification envoyée avec succès',
              showConfirmButton: false,
              timer: 2000
           });
         },
        error: (err) => {
          if(err.status == 200){
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Notification envoyée avec succès',
              showConfirmButton: false,
              timer: 2000
           });
           this.router.navigate(['/notifications/list']);
          }else{
            Swal.fire({
                  position: 'center',
                  icon: 'error',
                  title: 'Une erreur est survenue. Veuillez reessayer plus tard.',
                  showConfirmButton: false,
                  timer: 2000
                });
          }
        }
    }
    
      
    )
  }

  sendOTP(){
    this.showFromNumber = false;
    this.showOTPForm = true;
  }


  valideOtp(){
    this.showOTPForm = false;
    this.showEnrolForm = true;
  }


}
