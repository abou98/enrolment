import { MenuItem } from "./menu.model";
let userRight, currentUser;
userRight = JSON.parse(localStorage.getItem("userRight"));
currentUser = JSON.parse(localStorage.getItem("currentUser"));
export const MENU: MenuItem[] = [
      {
        id: 1,
        label: 'MENUITEMS.MENU.TEXT',
        isTitle: true
    },
    {
        id: 2,
        label: 'MENUITEMS.DASHBOARDS.TEXT',
        icon: 'ri-dashboard-line',
        // badge: {
        //     variant: 'success',
        //     text: 'MENUITEMS.DASHBOARDS.BADGE',
        // },
        link: '/'
    },
    {
        id: 3,
        label: 'MENUITEMS.MESSAGE.TEXT',
        icon: 'bx ri-user-3-line',
        subItems: [
            {
                id: 4,
                label: 'MENUITEMS.MESSAGE.LIST.CREATE',
                link: '/messages/create',
                parentId: 3
            },
            {
                id: 5,
                label: 'MENUITEMS.MESSAGE.LIST.SEARCH',
                link: '/messages/list',
                parentId: 3
            },
             {
                id: 6,
              label: 'MENUITEMS.MESSAGE.LIST.PARAMETRAGE',
                link: '/messages/parametrages',
                parentId: 3
            }

        ]
    },
];
// MENU.push({
//   id: 1,
//   label: "MENUITEMS.MENU.TEXT",
//   isTitle: true,
// });

// if (userRight !== undefined) {
//   if (userRight?.hasPatientsRight) {
//     const element = {
//       id: 2,
//       label: "PATIENT.TEXT",
//       icon: "ri-group-line",
//       subItems: [],
//     };
//     if (userRight?.hasIdentifyAnInsuredRight) {
//       element.subItems.push({
//         id: 8,
//         label: "PATIENT.READINSUREDCARD.MENU_TEXT",
//         link: "/patient/readinsuredcard",
//         parentId: 2,
//       });
//     }

//     if (userRight?.hasPatientsRight) {
//       element.subItems.push({
//         id: 3,
//         label: "PATIENT.LIST.LIST",
//         link: "/patient/list",
//         parentId: 2,
//       });
//     }

//     if (userRight?.hasPatientEditRight) {
//       element.subItems.push({
//         id: 4,
//         label: "PATIENT.LIST.CREATE",
//         link: "/patient/create",
//         parentId: 2,
//       });
//     }

//     MENU.push(element);
//   }

//   if (userRight?.hasMedicalSellPrestationRight) {
//     const element = {
//       id: 9,
//       label: "Prestations",
//       icon: "ri-hospital-line",
//       subItems: [],
//     };
//     if (userRight?.hasMedicalSellPrestationRight) {
//       element.subItems.push({
//         id: 10,
//         label: "Les prestations",
//         link: "/prestation/list",
//         parentId: 5,
//       });
  
//       element.subItems.push({
//         id: 10,
//         label: "Ajouter une prestation",
//         link: "/prestation/new/PRT",
//         parentId: 5,
//       });
//     }

//     MENU.push(element);
//   }

//   if (userRight?.hasMedicalAppointmentRight) {
//     const element = {
//       id: 8,
//       label: "APPOINTMENTS.TEXT",
//       icon: "ri-calendar-2-line",
//       subItems: [],
//     };

//     if (userRight?.hasMedicalAppointmentEditRight || currentUser?.doctor) {
//       element.subItems.push({
//         id: 9,
//         label: "APPOINTMENTS.TEXT",
//         link: "/appointment/appointment-scheduler",
//         parentId: 8,
//       });
//     }

//     if (userRight?.hasMedicalAppointmentEditRight) {
//       element.subItems.push({
//         id: 10,
//         label: "APPOINTMENTS.MOTIFS",
//         link: "/appointment/reasons",
//         parentId: 8,
//       });
//     }

//     if (userRight?.hasMedicalAppointmentEditRight) {
//       element.subItems.push({
//         id: 11,
//         label: "APPOINTMENTS.RAPPELS",
//         link: "/user/create",
//         parentId: 8,
//       });
//     }

//     if (userRight?.hasTimeSlotRight) {
//       const elm = {
//         id: 12,
//         label: "APPOINTMENTS.CRENEAUMENU",
//         icon: "ri-calendar-2-line",
//         subItems: [],
//       };
//       if (userRight?.hasTimeSlotEditRight) {
//         elm.subItems.push({
//           id: 13,
//           label: "APPOINTMENTS.CRENEAUMENU1",
//           link: "/appointment/createslot",
//           parentId: 12,
//         });
//       }
//       if (userRight?.hasTimeSlotRight) {
//         element.subItems.push({
//           id: 14,
//           label: "APPOINTMENTS.CRENEAUMENU2",
//           link: "/appointment/listslot",
//           parentId: 12,
//         });
//       }
//       element.subItems.push(elm);
//     }

//     MENU.push(element);
//   }

//   if (userRight?.hasModelPrescriptionRight) {
//     const element = {
//       id: 17,
//       label: "PRESCRIPTION-MODEL.TEXT",
//       icon: "ri-file-edit-line",
//       subItems: [],
//     };
//     if (userRight?.hasModelPrescriptionEditRight) {
//       element.subItems.push({
//         id: 18,
//         label: "PRESCRIPTION-MODEL.SUBMENUS.CREATE",
//         link: "/prescription-model/create/new",
//         parentId: 17,
//       });
//     }
//     if (userRight?.hasModelPrescriptionViewRight) {
//       element.subItems.push({
//         id: 19,
//         label: "PRESCRIPTION-MODEL.SUBMENUS.LIST",
//         link: "/prescription-model/list",
//         parentId: 17,
//       });
//     }

//     MENU.push(element);
//   }

//   if (userRight?.hasModelActPrescriptionRight) {
//     const element = {
//       id: 20,
//       label: "ACT-MODEL.TEXT",
//       icon: "ri-file-edit-line",
//       subItems: [],
//     };
//     if (userRight?.hasModelActPrescriptionEditRight) {
//       element.subItems.push({
//         id: 21,
//         label: "ACT-MODEL.SUBMENUS.CREATE",
//         link: "/act-prescription-model/create/new",
//         parentId: 20,
//       });
//     }
//     if (userRight?.hasModelActPrescriptionViewRight) {
//       element.subItems.push({
//         id: 22,
//         label: "ACT-MODEL.SUBMENUS.LIST",
//         link: "/act-prescription-model/list",
//         parentId: 20,
//       });
//     }

//     MENU.push(element);
//   }

//   if (userRight?.hasCommunicationEditRight) {
//     const element = {
//       id: 13,
//       label: "MESSAGERIE.TEXT",
//       icon: "ri-message-3-line",
//       subItems: [],
//     };
//     if (userRight?.hasMsgEditRight) {
//       element.subItems.push({
//         id: 13,
//         label: "MESSAGERIE.SUBMENUS.MEDICALE",
//         link: "/messagerie/medicale",
//         parentId: 12,
//       });
//     }

//     MENU.push(element);
//   }

//   if (userRight?.hasThirdPartyRight) {
//     const element = {
//       id: 14,
//       label: "CI.TEXT",
//       icon: "ri-bank-line",
//       subItems: [],
//     };
//     if (userRight?.hasInsurerRight) {
//       const elm = {
//         id: 13,
//         label: "CI.SUBMENUS.ORGANISMES",
//         subItems: [],
//       };

//       if (userRight?.hasInsurerViewRight) {
//         elm.subItems.push({
//           id: 14,
//           label: "SHARED.RESEARCH",
//           link: "/organismes-de-remboursement/liste",
//           parentId: 13,
//         });
//       }
//     }

//     MENU.push(element);
//   }
// }



/*
// reste droits
MENU.push({
  id: 5,
  label: 'Devis',
  icon: 'ri-bill-line',
  subItems: [
    {
      id: 6,
      label: 'Liste',
      link: '/quotation/list',
      parentId: 5,
    },
  ],
});

// à enlever
MENU.push({
  id: 5,
  label: 'Logistique',
  icon: 'ri-luggage-cart-line',
  subItems: [
    {
      id: 6,
      label: 'Disponibilité',
      link: '/logistic/availability',
      parentId: 5,
    },
  ],
});

// reste droits
MENU.push({
  id: 5,
  label: 'STAFF.TEXT',
  icon: 'ri-folder-user-line',
  subItems: [
    {
      id: 6,
      label: 'STAFF.LIST.TEXT',
      link: '/user/list',
      parentId: 5,
    },
    {
      id: 7,
      label: 'STAFF.LIST.CREATE',
      link: '/user/create',
      parentId: 5,
    },
  ],
});

// reste droits
MENU.push({
  id: 17,
  label: 'ROLE.TEXT',
  icon: 'ri-lock-password-fill',
  subItems: [
    {
      id: 18,
      label: 'ROLE.CREATE',
      link: '/roles/create',
      parentId: 17,
    },
    {
      id: 19,
      label: 'ROLE.LIST',
      link: '/roles/list',
      parentId: 17,
    },
  ],
});

MENU.push(
  {
    id: 15,
    label: 'GF.TEXT',
    icon: 'ri-safe-2-line',
    subItems: [
      {
        id: 13,
        link: '/gestion-financiere/journal',
        label: 'Journal',
      },
      {
        id: 13,
        link: '/gestion-financiere/positions',
        label: 'Positions',
      },
      {
        id: 13,
        label: 'Banques',
        subItems: [
          {
            id: 13,
            link: '/gestion-financiere/creer-banque',
            label: 'Créer',
          },
          {
            id: 13,
            link: '/gestion-financiere/rechercher-banques',
            label: 'Rechercher',
          },
        ],
      },
      {
        id: 13,
        label: 'Caisses',
        subItems: [
          {
            id: 13,
            link: '/gestion-financiere/creer-caisse',
            label: 'Créer',
          },
          {
            id: 13,
            link: '/gestion-financiere/rechercher-caisses',
            label: 'Rechercher',
          },
        ],
      },
      {
        id: 13,
        label: 'Recettes',
        subItems: [
          {
            id: 13,
            link: '/gestion-financiere/creer-recette',
            label: 'Créer',
          },
          {
            id: 13,
            link: '/gestion-financiere/rechercher-recettes',
            label: 'Rechercher',
          },
          {
            id: 13,
            link: '/gestion-financiere/postes-recettes',
            label: 'Postes de recettes',
          },
        ],
      },
      {
        id: 13,
        label: 'Dépenses',
        subItems: [
          {
            id: 13,
            link: '/gestion-financiere/creer-depense',
            label: 'Créer',
          },
          {
            id: 13,
            link: '/gestion-financiere/rechercher-depenses',
            label: 'Rechercher',
          },
          {
            id: 13,
            link: '/gestion-financiere/postes-depenses',
            label: 'Postes de dépenses',
          },
        ],
      },
      {
        id: 13,
        label: 'Rélevés d\'honoraires',
        subItems: [
          {
            id: 13,
            link: '/gestion-financiere/creer-releve-honoraires',
            label: 'Créer',
          },
          {
            id: 13,
            link: '/gestion-financiere/rechercher-releves-honoraires',
            label: 'Rechercher',
          },
        ],
      },
      {
        id: 13,
        label: 'Honoraires',
        subItems: [
          {
            id: 13,
            link: '/gestion-financiere/creer-honoraire',
            label: 'Créer',
          },
          {
            id: 13,
            link: '/gestion-financiere/rechercher-honoraires',
            label: 'Rechercher',
          },
        ],
      },
      {
        id: 13,
        label: 'Relevés de factures',
        subItems: [
          {
            id: 13,
            label: 'Créer',
          },
          {
            id: 13,
            label: 'Rechercher',
            link: '/gestion-financiere/releves-factures',
            parentId: 13,
          },
        ],
      },
      {
        id: 14,
        label: 'GF.SUBMENUS.BILL',
        link: '/gestion-financiere/factures',
        parentId: 15,
      },
      {
        id: 15,
        label: 'GF.SUBMENUS.PAYMENTS',
        link: '/gestion-financiere/reglements',
        parentId: 15,
      },
      {
        id: 16,
        label: 'GF.SUBMENUS.DUES',
        link: '/gestion-financiere/reglements-a-payer',
        parentId: 15,
      },
    ],
  },
  {
    id: 17,
    label: 'PRODUCTS.TEXT',
    icon: 'ri-inbox-unarchive-line',
    subItems: [
      {
        id: 1,
        label: 'PRODUCTS.SUBMENUS.CREATE',
        link: '/products/create',
        parentId: 17,
      },
      {
        id: 2,
        label: 'PRODUCTS.SUBMENUS.LIST',
        link: '/products/list',
        parentId: 17,
      },
      {
        id: 3,
        label: 'PRODUCTS.SUBMENUS.CATEGORIES',
        link: '/products/products-categories/list',
        parentId: 17,
      },
      {
        id: 4,
        label: 'PRODUCTS.SUBMENUS.STOCKMOVES.TEXT',
        subItems: [
          {
            id: 1,
            label: 'PRODUCTS.SUBMENUS.STOCKMOVES.CREATE',
            link: '/products/',
            parentId: 4,
          },
          {
            id: 1,
            label: 'PRODUCTS.SUBMENUS.STOCKMOVES.LIST',
            link: '/products/',
            parentId: 4,
          },
        ],
        }
    ],
  }
);*/
