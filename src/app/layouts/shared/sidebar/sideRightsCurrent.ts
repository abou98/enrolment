function initialize(): void {
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let userRight = currentUser?.userRights;

  this.menuItems.push({
    id: 1,
    label: "MENUITEMS.MENU.TEXT",
    isTitle: true,
  });

  if (userRight?.hasShortcutFormsMenu) {
    this.menuItems.push({
      id: 18,
      label: "Formulaires",
      icon: "ri-file-text-line",
      link: "/formulaires",
    });
  }

  if (userRight?.hasWaitingLineRight || currentUser.doctor) {
    const element = {
      id: 18,
      label: "SHARED.HOME",
      icon: "ri-home-2-line",
      link: "",
    };
    this.menuItems.push(element);
  }

  if (userRight?.hasMedicalPlanificationRight) {
    const element = {
      id: 2,
      label: "Planifications",
      icon: "ri-calendar-line",
      subItems: [
        {
          id: 3,
          label: "Planifications générales",
          link: "/planning/gen",
          parentId: 2,
        },
        {
          id: 4,
          label: "Mes prescriptions",
          link: "/planning/prescription",
          parentId: 2,
        },
        {
          id: 4,
          label: "Mes affectations",
          link: "/planning/affect",
          parentId: 2,
        },
      ],
    };
    this.menuItems.push(element);
  }

  // USERRIGHTS
  if (userRight !== undefined) {
    if (userRight?.hasSupervisionRight) {
      const element = {
        id: 2,
        label: "SHARED.REPORTING",
        icon: "ri-pie-chart-2-line",
        subItems: [
          {
            id: 3,
            label: "SHARED.REPORTING_1",
            link: "/reporting/medical",
            parentId: 2,
          },
          {
            id: 4,
            label: "SHARED.REPORTING_2",
            link: "/reporting/financier",
            parentId: 2,
          },
        ],
      };
      this.menuItems.push(element);
    }

    if (userRight?.hasPatientsRight) {
      const element = {
        id: 5,
        label: "PATIENT.TEXT",
        icon: "ri-group-line",
        subItems: [],
      };
      if (userRight?.hasPatientEditRight) {
        element.subItems.push({
          id: 8,
          label: "PATIENT.LIST.CREATE",
          link: this.path,
          parentId: 5,
        });
      }

      if (userRight?.hasIdentifyAnInsuredRight) {
        element.subItems.push({
          id: 6,
          label: "PATIENT.READINSUREDCARD.MENU_TEXT",
          link: "/patient/readinsuredcard",
          parentId: 5,
        });
      }
      // element.subItems.push({
      //   id: 6,
      //   label: "Identifier un patient",
      //   link: "/patient/identification",
      //   parentId: 5,
      // });
      if (userRight?.hasPatientsRight) {
        element.subItems.push({
          id: 7,
          label: "PATIENT.LIST.LIST",
          link: "/patient/list",
          parentId: 5,
        });
      }
      if (userRight?.hasPatientCategoryRightRight) {
        element.subItems.push({
          id: 90,
          label: "Catégories de patient",
          link: "/patient/category",
          parentId: 5,
        });
      }
      this.menuItems.push(element);
    }

    // Passeport
    if (userRight?.hasMedicalPassportRight) {
      const element = {
        id: 5,
        label: "PASSPORT.TEXT",
        icon: "ri-group-line",
        subItems: [],
      };
      if (userRight?.hasMedicalPassportEditRight) {
        element.subItems.push(
          {
            id: 10,
            label: "PASSPORT.GEN_CARD",
            link: "/passeport/search/gen",
            parentId: 5,
          },
          {
            id: 10,
            label: "PASSPORT.ENROLLMENT.TEXT",
            link: "/passeport/enrollment",
            parentId: 5,
          },
          {
            id: 10,
            label: "Identifier un patient",
            link: "/passeport/search/pm",
            parentId: 5,
          }
        );
      }
      this.menuItems.push(element);
    }

    if (userRight?.hasMedicalPrestationRight) {
      const element = {
        id: 9,
        label: "PRESTATION.TITLE",
        icon: "ri-hospital-line",
        subItems: [],
      };

      if (userRight?.hasMedicalPrestationRight) {
        element.subItems.push({
          id: 10,
          label: "PRESTATION.LIST_PRESTATIONS.TITLE",
          link: "/prestation/list",
          parentId: 9,
        });

        if (userRight?.hasPharmacyCommandAlertRight) {
          element.subItems.push({
            id: 88,
            label: "Alerte commande",
            link: "/alerte-command",
            parentId: 86,
          });
        }

        if (userRight?.hasConsultationRight) {
          const element2 = {
            id: 11,
            label: "Consultations",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasConsultationEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/consultation/create",
              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/consultation",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }

        if (userRight?.hasAnalysisRight) {
          const element2 = {
            id: 11,
            label: "Analyses",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasAnalysisCommandRight) {
            element2.subItems.push({
              id: 89,
              label: "Commandes Analyses",
              link: "/analysis/commands/analysis",
              parentId: 86,
            });
          }
          if (userRight?.hasAnalysisEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/analysis/create",

              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/analysis",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }

        if (userRight?.hasAmbulatoryRight) {
          const element2 = {
            id: 11,
            label: "Ambulatoires",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasAmbulatoryEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/ambulatory/create",
              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/ambulatoire",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }

        if (userRight?.hasHospitalisationRight) {
          const element2 = {
            id: 11,
            label: "Hospitalisations",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasHospitalisationEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/hospitalisation/create",
              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/hospitalisation",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }

        if (userRight?.hasRadiologyRight) {
          const element2 = {
            id: 11,
            label: "Radiologies",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasRadiologyCommandRight) {
            element2.subItems.push({
              id: 90,
              label: "Commandes Radiologies",
              link: "/analysis/commands/radiology",
              parentId: 86,
            });
          }
          if (userRight?.hasRadiologyEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/imaging/create",
              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/imaging",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }

        if (userRight?.hasVisitRight) {
          const element2 = {
            id: 11,
            label: "Visites",
            icon: "ri-calendar-2-line",
            subItems: [],
          };

          if (userRight?.hasVisitEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/visite/create",
              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/visite",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }

        if (userRight?.hasPharmacyPrestationRight) {
          const element2 = {
            id: 11,
            label: "Pharmacies",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasPharmacyCommandRight) {
            element2.subItems.push({
              id: 91,
              label: "Commandes Pharmacies",
              link: "/pharmacy/commands",
              parentId: 86,
            });
          }

          if (userRight?.hasPharmacyPrestationEditRight) {
            element2.subItems.push({
              id: 12,
              label: "Créer",
              link: "/prestation/new/PRT/pharmacy/create",
              parentId: 11,
            });
            element2.subItems.push({
              id: 10,
              label: "Liste",
              link: "/prestation/list/pharmacy",
              parentId: 5,
            });
          }
          element.subItems.push(element2);
        }
      }

      if (currentUser?.doctor) {
        element.subItems.push({
          id: 10,
          label: "PRESTATION.MES_SERVICES",
          link: "/prestation/mes-list",
          parentId: 9,
        });
      }
      // if (userRight?.hasMedicalSellPrestationRight) {
      //   element.subItems.push({
      //     id: 11,
      //     label: "PRESTATION.DIALYSE",
      //     link: "/prestation/dialyse-list/list",
      //     parentId: 10,
      //   });
      // }

      this.menuItems.push(element);
    }

    // if (userRight?.hasWaitingLineRight || currentUser.doctor) {
    //   const element = {
    //     id: 18,
    //     label: "WAITING_LINE.TITLE",
    //     icon: "ri-calendar-2-line",
    //     link: "/waiting/waitingline",
    //   };
    //   this.menuItems.push(element);
    // }

    if (userRight?.hasPregnancyRight) {
      const element = {
        id: 18,
        label: "Grossesse",
        icon: "ri-user-heart-fill",
        link: "/pregnancy/list",
      };
      this.menuItems.push(element);
    }

    if (userRight?.hasMedicalAppointmentRight) {
      const element = {
        id: 11,
        label: "APPOINTMENTS.TEXT",
        icon: "ri-calendar-2-line",
        subItems: [],
      };
      if (userRight?.hasMedicalAppointmentEditRight || currentUser?.doctor) {
        element.subItems.push({
          id: 12,
          label: "SHARED.AGENDA",
          link: "/appointment/appointment-scheduler",
          parentId: 11,
        });
      }
      if (userRight?.hasMedicalAppointmentEditRight) {
        element.subItems.push({
          id: 13,
          label: "APPOINTMENTS.MOTIFS",
          link: "/appointment/reasons",
          parentId: 11,
        });
      }
      /*if (userRight?.hasMedicalAppointmentEditRight) {
          element.subItems.push({
            id: 14,
            label: "APPOINTMENTS.RAPPELS",
            link: "/user/create",
            parentId: 11,
          });
        }

        if (userRight?.hasTimeSlotRight) {
          const elm = {
            id: 15,
            label: "APPOINTMENTS.CRENEAUMENU",
            icon: "ri-calendar-2-line",
            subItems: [],
          };
          if (userRight?.hasTimeSlotEditRight) {
            elm.subItems.push({
              id: 16,
              label: "APPOINTMENTS.CRENEAUMENU1",
              link: "/appointment/createslot",
              parentId: 15,
            });
          }
          if (userRight?.hasTimeSlotRight) {
            element.subItems.push({
              id: 17,
              label: "APPOINTMENTS.CRENEAUMENU2",
              link: "/appointment/listslot",
              parentId: 15,
            });
          }
          element.subItems.push(elm);
        }*/

      this.menuItems.push(element);
    }

    if (userRight?.hasModelPrescriptionRight) {
      const element = {
        id: 19,
        label: "PRESCRIPTION-MODEL.TEXT",
        icon: "ri-file-edit-line",
        subItems: [],
      };
      if (userRight?.hasModelPrescriptionEditRight) {
        element.subItems.push({
          id: 20,
          label: "PRESCRIPTION-MODEL.SUBMENUS.CREATE",
          link: "/prescription-model/create/new",
          parentId: 19,
        });
      }
      if (userRight?.hasModelPrescriptionViewRight) {
        element.subItems.push({
          id: 21,
          label: "PRESCRIPTION-MODEL.SUBMENUS.LIST",
          link: "/prescription-model/list",
          parentId: 19,
        });
      }
      this.menuItems.push(element);
    }

    if (userRight?.hasModelActPrescriptionRight) {
      const element = {
        id: 22,
        label: "ACT-MODEL.TEXT",
        icon: "ri-file-edit-line",
        subItems: [],
      };
      if (userRight?.hasModelActPrescriptionEditRight) {
        element.subItems.push({
          id: 23,
          label: "ACT-MODEL.SUBMENUS.CREATE",
          link: "/act-prescription-model/create/new",
          parentId: 22,
        });
      }
      if (userRight?.hasModelActPrescriptionViewRight) {
        element.subItems.push({
          id: 24,
          label: "ACT-MODEL.SUBMENUS.LIST",
          link: "/act-prescription-model/list",
          parentId: 22,
        });
      }
      this.menuItems.push(element);
    }

    // if (userRight?.hasCommunicationEditRight) {
    //   const element = {
    //     id: 25,
    //     label: "MESSAGERIE.TEXT",
    //     icon: "ri-message-3-line",
    //     subItems: [],
    //   };
    //   if (userRight?.hasMsgEditRight) {
    //     element.subItems.push({
    //       id: 26,
    //       label: "MESSAGERIE.SUBMENUS.MEDICALE",
    //       link: "/messagerie/medicale",
    //       parentId: 25,
    //     });
    //   }
    //   this.menuItems.push(element);
    // }

    if (userRight?.hasThirdPartyRight) {
      const element = {
        id: 27,
        label: "CI.TEXT",
        icon: "ri-bank-line",
        subItems: [],
      };
      if (userRight?.hasInsurerRight) {
        const elm = {
          id: 28,
          label: "CI.SUBMENUS.ORGANISMES",
          parentId: 27,
          subItems: [],
        };
        if (userRight?.hasInsurerEditRight) {
          elm.subItems.push({
            id: 29,
            label: "Créer",
            link: "/organismes-de-remboursement/creer",
            parentId: 28,
          });
        }
        if (userRight?.hasInsurerViewRight) {
          elm.subItems.push({
            id: 29,
            label: "SHARED.RESEARCH",
            link: "/organismes-de-remboursement/rechercher",
            parentId: 28,
          });
        }
        elm.subItems.push({
          id: 31,
          label: "Conventions de prix",
          subItems: [
            // {
            //   id: 61,
            //   label: "créer",
            //   link: "/organismes-de-remboursement/conventions/creer",
            //   parentId: 60,
            // },
            {
              id: 61,
              label: "Rechercher",
              link: "/organismes-de-remboursement/conventions/rechercher",
              parentId: 60,
            },
          ],
        });
        element.subItems.push(elm);
      }
      this.menuItems.push(element);
    }

    if (userRight?.hasQuoteViewRight) {
      const element = {
        id: 30,
        label: "SHARED.DEVIS",
        icon: "ri-bill-line",
        subItems: [],
      };
      if (userRight?.hasQuoteViewRight) {
        element.subItems.push(
          {
            id: 31,
            label: "SHARED.DEVIS_LIST",
            link: "/quotation/list",
            parentId: 30,
          },
          {
            id: 31,
            label: "SHARED.DEVIS_DEMANDES",
            link: "/quotation/quote-requests",
            parentId: 30,
          }
        );
      }
      this.menuItems.push(element);
    }
    // --------------  Relevés de factures -------------
    if (userRight?.hasRegisterRight) {
      const element = {
        id: 32,
        label: "SHARED.REGISTRE",
        icon: "ri-file-2-line",
        subItems: [
          userRight?.hasRegisterEditRight
            ? {
                id: 61,
                label: "SHARED.CREATE_ENTRY",
                link: "/registre/create-entry",
                parentId: 60,
              }
            : null,
          userRight?.hasRegisterViewRight
            ? {
                id: 62,
                label: "SHARED.SEARCH_ENTRY",
                link: "/registre/list-entry",
                parentId: 60,
              }
            : null,
          userRight?.hasRegisterRight
            ? {
                id: 63,
                label: "SHARED.MOTIFS",
                link: "/registre/motifs",
                parentId: 60,
              }
            : null,
        ],
      };
      this.menuItems.push(element);
    }

    if (userRight?.hasFinancialRight) {
      const element = {
        id: 32,
        label: "GF.TEXT",
        icon: "ri-safe-2-line",
        subItems: [],
      };
      // --------------  Recettes & Dépenses -------------
      const elm = {
        id: 33,
        label: "SHARED.RECETTES",
        parentId: 32,
        subItems: [],
      };
      elm.subItems.push({
        id: 34,
        label: "SHARED.JOURNAL",
        link: "/gestion-financiere/journal",
        parentId: 33,
      });
      elm.subItems.push({
        id: 35,
        label: "SHARED.POSITION",
        link: "/gestion-financiere/positions",
        parentId: 33,
      });
      if (userRight?.hasInsurerBatchsPaymentRight) {
        elm.subItems.push({
          id: 36,
          label: "SHARED.BANQUES",
          parentId: 33,
          subItems: [
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 37,
                  label: "SHARED.B_CREATE",
                  link: "/gestion-financiere/creer-banque",
                  parentId: 36,
                }
              : null,
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 38,
                  label: "SHARED.B_SEARCH",
                  link: "/gestion-financiere/rechercher-banques",
                  parentId: 36,
                }
              : null,
          ],
        });
      }
      if (userRight?.hasInsurerBatchsPaymentRight) {
        elm.subItems.push({
          id: 39,
          label: "SHARED.CAISSE",
          parentId: 33,
          subItems: [
            userRight?.hasInsurerBatchsPaymentEditRight
              ? {
                  id: 40,
                  label: "SHARED.B_CREATE",
                  link: "/gestion-financiere/creer-caisse",
                  parentId: 39,
                }
              : null,
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 41,
                  label: "SHARED.B_SEARCH",
                  link: "/gestion-financiere/rechercher-caisses",
                  parentId: 39,
                }
              : null,
          ],
        });
      }
      if (userRight?.hasInsurerBatchsPaymentRight) {
        elm.subItems.push({
          id: 42,
          label: "SHARED.RECETTE",
          parentId: 33,
          subItems: [
            userRight?.hasInsurerBatchsPaymentEditRight
              ? {
                  id: 43,
                  label: "SHARED.B_CREATE",
                  link: "/gestion-financiere/creer-recette",
                  parentId: 42,
                }
              : null,
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 44,
                  label: "SHARED.B_SEARCH",
                  link: "/gestion-financiere/rechercher-recettes",
                  parentId: 42,
                }
              : null,
            {
              id: 45,
              label: "SHARED.Post_RECETTE",
              parentId: 42,
              subItems: [
                userRight?.hasInsurerBatchsPaymentEditRight
                  ? {
                      id: 46,
                      label: "SHARED.B_CREATE",
                      link: "/gestion-financiere/creer-poste-recettes",
                      parentId: 45,
                    }
                  : null,
                {
                  id: 47,
                  label: "SHARED.B_SEARCH",
                  link: "/gestion-financiere/postes-recettes",
                  parentId: 45,
                },
              ],
            },
          ],
        });
      }
      if (userRight?.hasInsurerBatchsPaymentRight) {
        elm.subItems.push({
          id: 48,
          label: "SHARED.DEPENSE",
          parentId: 33,
          subItems: [
            userRight?.hasInsurerBatchsPaymentEditRight
              ? {
                  id: 49,
                  label: "SHARED.B_CREATE",
                  link: "/gestion-financiere/creer-depense",
                  parentId: 48,
                }
              : null,
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 50,
                  label: "SHARED.B_SEARCH",
                  link: "/gestion-financiere/rechercher-depenses",
                  parentId: 48,
                }
              : null,
            {
              id: 51,
              label: "SHARED.Post_DEPENSE",
              parentId: 48,
              subItems: [
                userRight?.hasInsurerBatchsPaymentEditRight
                  ? {
                      id: 52,
                      label: "SHARED.B_CREATE",
                      link: "/gestion-financiere/creer-poste-depenses",
                      parentId: 51,
                    }
                  : null,
                {
                  id: 53,
                  label: "SHARED.B_SEARCH",
                  link: "/gestion-financiere/postes-depenses",
                  parentId: 51,
                },
              ],
            },
          ],
        });
      }
      element.subItems.push(elm);

      // --------------  Relevés d'honoraires -------------
      if (userRight?.hasHonoraireRight) {
        element.subItems.push({
          id: 54,
          label: "Relevés d'honoraires",
          parentId: 32,
          subItems: [
            userRight?.hasHonoraireEditRight
              ? {
                  id: 55,
                  label: "Créer",
                  link: "/gestion-financiere/creer-releve-honoraires",
                  parentId: 54,
                }
              : null,
            userRight?.hasHonoraireViewRight
              ? {
                  id: 56,
                  label: "Rechercher",
                  link: "/gestion-financiere/rechercher-releves-honoraires",
                  parentId: 54,
                }
              : null,
          ],
        });
      }

      // --------------  Honoraires -------------
      if (userRight?.hasHonoraireRight) {
        element.subItems.push({
          id: 57,
          label: "Honoraires",
          parentId: 32,
          subItems: [
            userRight?.hasHonoraireEditRight
              ? {
                  id: 58,
                  label: "Créer",
                  link: "/gestion-financiere/creer-honoraire",
                  parentId: 57,
                }
              : null,
            userRight?.hasHonoraireViewRight
              ? {
                  id: 59,
                  label: "Rechercher",
                  link: "/gestion-financiere/rechercher-honoraires",
                  parentId: 57,
                }
              : null,
          ],
        });
      }

      // --------------  Relevés de factures -------------
      if (userRight?.hasInsurerBatchsPaymentRight) {
        element.subItems.push({
          id: 60,
          label: "Relevés de factures",
          parentId: 32,
          subItems: [
            userRight?.hasInsurerBatchsPaymentEditRight
              ? {
                  id: 61,
                  label: "Créer",
                  link: "/gestion-financiere/creer-releve",
                  parentId: 60,
                }
              : null,
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 62,
                  label: "Rechercher",
                  link: "/gestion-financiere/releves-factures",
                  parentId: 60,
                }
              : null,
            userRight?.hasInsurerBatchsPaymentRight
              ? {
                  id: 63,
                  label: "GF.SUBMENUS.BILL",
                  link: "/gestion-financiere/factures",
                  parentId: 60,
                }
              : null,
          ],
        });
      }

      // --------------  Règlements -------------
      if (userRight?.hasInsurerBatchsPaymentRight) {
        element.subItems.push({
          id: 64,
          label: "GF.SUBMENUS.PAYMENTS",
          link: "/gestion-financiere/reglements",
          parentId: 32,
        });
      }

      // --------------  Règlements à payer -------------
      if (userRight?.hasFinancialEntryCashEditRight) {
        element.subItems.push({
          id: 65,
          label: "GF.SUBMENUS.DUES",
          link: "/gestion-financiere/reglements-a-payer",
          parentId: 32,
        });
      }

      this.menuItems.push(element);
    }

    if (currentUser?.userName === "abigail.akakpo@eyone.net") {
      this.menuItems.push({
        id: 84,
        label: "Messagerie",
        icon: "ri-chat-3-fill",
        subItems: [
          {
            id: 26,
            label: "MESSAGERIE.SUBMENUS.MEDICALE",
            link: "/messagerie/medicale",
            parentId: 25,
          },
          {
            id: 85,
            label: "Messagerie Mock",
            link: "/messages/interne",
            parentId: 84,
          },
          {
            id: 86,
            label: "Messagerie Interne",
            parentId: 84,
            subItems: [
              {
                id: 90,
                label: "Ecrire",
                link: "/messages/interne/new-message",
                parentId: 86,
              },
              {
                id: 87,
                label: "Reçus",
                link: "/messages/interne/received",
                parentId: 86,
              },
              {
                id: 88,
                label: "Envoyés",
                link: "/messages/interne/sent",
                parentId: 86,
              },
              {
                id: 89,
                label: "Mails",
                link: "/messages/interne/mails",
                parentId: 86,
              },
            ],
          },
          {
            id: 86,
            label: "Messagerie SMS",
            parentId: 84,
            subItems: [
              {
                id: 90,
                label: "Nouveau Message",
                link: "/messages/sms/sms_create",
                parentId: 86,
              },
              {
                id: 87,
                label: "En attente / Non envoyés",
                link: "/messages/sms/waiting",
                parentId: 86,
              },
              {
                id: 88,
                label: "Envoyés",
                link: "/messages/sms/sent_sms",
                parentId: 86,
              },
              {
                id: 89,
                label: "Unitaires",
                link: "/messages/sms/unitaire",
                parentId: 86,
              },
              {
                id: 89,
                label: "Statistiques",
                link: "/messages/sms/stats",
                parentId: 86,
              },
            ],
          },
        ],
      });
    }

    if (userRight?.hasExtractionRight) {
      const element = {
        id: 30,
        label: "Extractions",
        icon: "ri-settings-2-line",
        subItems: [
          {
            id: 31,
            label: "Rechercher",
            link: "/rechercher-extractions",
            parentId: 30,
          },
        ],
      };
      this.menuItems.push(element);
    }

    if (userRight?.hasProductRight) {
      const element = {
        id: 66,
        label: "PRODUCTS.TEXT",
        icon: "ri-inbox-unarchive-line",
        subItems: [],
      };

      if (userRight?.hasProductEditRight) {
        element.subItems.push({
          id: 67,
          label: "PRODUCTS.SUBMENUS.CREATE",
          link: "/products/create",
          parentId: 66,
        });
      }

      if (userRight?.hasProductRight) {
        element.subItems.push({
          id: 68,
          label: "PRODUCTS.SUBMENUS.LIST",
          link: "/products/list",
          parentId: 66,
        });
      }

      if (userRight?.hasProductCategoryRight) {
        element.subItems.push({
          id: 69,
          label: "PRODUCTS.SUBMENUS.CATEGORIES",
          link: "/products/products-categories/list",
          parentId: 66,
        });
      }

      if (userRight?.hasStockMouvementRight) {
        element.subItems.push({
          id: 70,
          label: "PRODUCTS.SUBMENUS.STOCKMOVES.TEXT",
          link: "/products/stocks-moves/list",
          parentId: 66,
          // subItems: [
          //   {
          //     id: 71,
          //     label: "PRODUCTS.SUBMENUS.STOCKMOVES.CREATE",
          //     link: "/products/stocks-moves/create",
          //     parentId: 70,
          //   },
          //   {
          //     id: 72,
          //     label: "PRODUCTS.SUBMENUS.STOCKMOVES.LIST",
          //     link: "/products/stocks-moves/list",
          //     parentId: 70,
          //   },
          // ],
        });
      }

      if (userRight?.hasProductCategoryRight) {
        element.subItems.push({
          id: 73,
          label: "PRODUCTS.SUBMENUS.STOCKPOSITION",
          link: "/products/stocks-positions/list",
          parentId: 66,
        });
      }

      // if (userRight?.hasProductCategoryRight) {
      //   element.subItems.push({
      //     id: 74,
      //     label: "PRODUCTS.SUBMENUS.PHARMAPRODUCTS",
      //     link: "/products/pharma-products/list",
      //     parentId: 66,
      //   });
      // }
      this.menuItems.push(element);
    }
  }

  if (userRight?.hasOrganismRight) {
    this.menuItems.push({
      id: 84,
      label: "Organisation",
      icon: "ri-building-line",
      subItems: [
        {
          id: 90,
          label: "Creer",
          link: "/organisation/creer",
          parentId: 86,
        },
        {
          id: 87,
          label: "Rechercher",
          link: "/organisation/rechercher",
          parentId: 86,
        },
        {
          id: 87,
          label: "Organigramme",
          link: "/organisation/organigramme",
          parentId: 86,
        },
        {
          id: 87,
          label: "Types d'organisation",
          link: "/organisation/types",
          parentId: 86,
        },
      ],
    });
  }
  // COLLABORATORRIGHTS
  if (userRight?.hasCollaboratorRight) {
    const element = {
      id: 75,
      label: "Personnel",
      icon: "ri-inbox-unarchive-line",
      subItems: [],
    };

    if (userRight?.hasCollaboratorEditRight) {
      element.subItems.push({
        id: 76,
        label: "Créer autre personnel ",
        link: "/user/create",
        parentId: 75,
      });
    }
    if (userRight?.hasCollaboratorViewRight) {
      element.subItems.push({
        id: 77,
        label: "Annuaire",
        link: "/user/list",
        parentId: 75,
      });
    }

    if (userRight?.hasCollaboratorViewRight) {
      let el2: any = {
        id: 78,
        label: "Professionnels de la santé",
        parentId: 75,
        subItems: [],
      };
      if (userRight?.hasCollaboratorViewRight) {
        el2.subItems.push({
          id: 79,
          label: "Créer",
          parentId: 78,
          link: "/user/doctors/create",
        });
        el2.subItems.push({
          id: 80,
          label: "Rechercher",
          parentId: 78,
          link: "/user/doctors/list",
        });
        el2.subItems.push({
          id: 81,
          label: "Types de professionnels",
          parentId: 78,
          link: "/user/doctors/types",
        });
        el2.subItems.push({
          id: 82,
          label: "Spécialisations",
          parentId: 78,
          link: "/user/doctors/specialisations",
        });
        el2.subItems.push({
          id: 83,
          label: "Titre de professionnel",
          parentId: 78,
          link: "/user/doctors/titles",
        });
      }
      element.subItems.push(el2);
    }

    this.menuItems.push(element);
  }

  if (userRight?.hasLogisticView) {
    let el2: any = {
      id: 84,
      label: "Logistique",
      icon: "ri-luggage-cart-line",
      parentId: 75,
      subItems: [],
    };
    // el2.subItems.push({
    //   id: 85,
    //   label: "Disponibilité",
    //   link: "/logistic/availability",
    //   parentId: 84,
    // });
    if (userRight?.hasBedRight) {
      el2.subItems.push({
        id: 891,
        label: "Lits",
        parentId: 84,
        link: "/logistic/beds",
      });
    }
    if (userRight?.hasRoomRight) {
      let el3 = {
        id: 81,
        label: "Chambres",
        link: "/logistic/rooms/add-room",
        parentId: 78,
        subItems: [],
      };

      if (userRight?.hasRoomEditRight) {
        el3.subItems.push({
          id: 90,
          label: "Créer",
          link: "/logistic/rooms/add-room",
          parentId: 86,
        });
      }

      if (userRight?.hasRoomViewRight) {
        el3.subItems.push({
          id: 87,
          label: "Liste",
          link: "/logistic/rooms",
          parentId: 86,
        });
      }

      if (userRight?.hasRoomCategoryViewRight) {
        el3.subItems.push({
          id: 88,
          label: "Catégories",
          link: "/logistic/room-category",
          parentId: 86,
        });
      }

      // if (userRight?.hasRoomNetworkViewRight) {
      //   el3.subItems.push({
      //     id: 89,
      //     label: "Statistiques",
      //     link: "/logistic/room-statistics",
      //     parentId: 86,
      //   });
      // }

      el2.subItems.push(el3);
    }
    this.menuItems.push(el2);
  }

  // if (currentUser?.userName === "abigail.akakpo@eyone.net") {
  //   this.menuItems.push({
  //     id: 84,
  //     label: "Logistique",
  //     icon: "ri-luggage-cart-line",
  //     subItems: [
  //       {
  //         id: 85,
  //         label: "Disponibilité",
  //         link: "/logistic/availability",
  //         parentId: 84,
  //       },
  //       {
  //         id: 86,
  //         label: "Chambres",
  //         parentId: 84,
  //         subItems: [
  //           {
  //             id: 90,
  //             label: "Créer",
  //             link: "/logistic/rooms/add-room",
  //             parentId: 86,
  //           },
  //           {
  //             id: 87,
  //             label: "Liste",
  //             link: "/logistic/rooms",
  //             parentId: 86,
  //           },
  //           {
  //             id: 88,
  //             label: "Catégories",
  //             link: "/logistic/room-category",
  //             parentId: 86,
  //           },
  //           {
  //             id: 89,
  //             label: "Statistiques",
  //             link: "/logistic/room-statistics",
  //             parentId: 86,
  //           },
  //         ],
  //       },
  //       {
  //         id: 891,
  //         label: "Lits",
  //         parentId: 84,
  //         link: "/logistic/beds",

  //         // subItems: [

  //         //   {
  //         //     id: 87,
  //         //     label: "Liste",
  //         //     link: "/logistic/rooms",
  //         //     parentId: 86,
  //         //   },
  //         //   {
  //         //     id: 88,
  //         //     label: "Catégories",
  //         //     link: "/logistic/room-category",
  //         //     parentId: 86,
  //         //   },
  //         //   {
  //         //     id: 89,
  //         //     label: "Statistiques",
  //         //     link: "/logistic/room-statistics",
  //         //     parentId: 86,
  //         //   },
  //         // ],
  //       },
  //     ],
  //   });
  if (userRight?.hasParametrageRight) {
    let el = {
      id: 84,
      label: "Paramètrages",
      icon: "ri-luggage-cart-line",
      subItems: [
        {
          id: 89,
          label: "Mon organisation",
          parentId: 86,
          link: "/settings/mon-org",
        },
        {
          id: 86,
          label: "Prestations médicales",
          parentId: 84,
          subItems: [
            {
              id: 90,
              label: "Configurer un acte",
              link: "/settings/prest/set-act",
              parentId: 86,
            },
            {
              id: 87,
              label: "Configurer une consultation",
              link: "/settings/prest/set-consultation",
              parentId: 86,
            },
            {
              id: 88,
              label: "Configurer un acte d'imagerie",
              link: "/settings/prest/set-imagerie",
              parentId: 86,
            },
            {
              id: 89,
              label: "Configurer un acte d'analyse",
              link: "/settings/prest/set-analyse",
              parentId: 86,
            },
            {
              id: 89,
              label: "Rechercher",
              link: "/settings/prest/rechercher",
              parentId: 86,
            },
          ],
        },
        {
          id: 89,
          label: "Nomenclatures",
          parentId: 86,
          subItems: [
            {
              id: 90,
              label: "Rechercher",
              link: "/settings/nomenclature/list",
              parentId: 86,
            },
            {
              id: 87,
              label: "Lettre cle",
              link: "/settings/nomenclature/lettre",
              parentId: 86,
            },
            {
              id: 88,
              label: "Dents",
              link: "/settings/nomenclature/tooths",
              parentId: 86,
            },
          ],
        },
        {
          id: 86,
          label: "Données nat. de santé",
          parentId: 84,
          subItems: [
            {
              id: 89,
              label: "RH",
              parentId: 86,
              subItems: [
                {
                  id: 90,
                  label: "Types de professionnel",
                  link: "/settings/dns/types",
                  parentId: 86,
                },
                {
                  id: 87,
                  label: "Specialisations",
                  link: "/settings/dns/spec",
                  parentId: 86,
                },
                {
                  id: 88,
                  label: "Titre de professionnel",
                  link: "/settings/dns/titles",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Categorie  socioprofessionnel",
                  link: "/settings/dns/categorie",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Fonction",
                  link: "/settings/dns/fonction",
                  parentId: 86,
                },
              ],
            },
            {
              id: 89,
              label: "Données de pays",
              parentId: 86,
              subItems: [
                {
                  id: 90,
                  label: "Pays",
                  link: "/settings/dns/pays",
                  parentId: 86,
                },
                {
                  id: 87,
                  label: "Régions",
                  link: "/settings/dns/regions",
                  parentId: 86,
                },
                {
                  id: 88,
                  label: "Departements",
                  link: "/settings/dns/deps",
                  parentId: 86,
                },
                {
                  id: 88,
                  label: "Communes",
                  link: "/settings/dns/commune",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Quartiers",
                  link: "/settings/dns/quartier",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "TVA",
                  link: "/settings/dns/tva",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Devises",
                  link: "/settings/dns/devises",
                  parentId: 86,
                },
              ],
            },
            {
              id: 89,
              label: "Données de patients",
              parentId: 86,
              subItems: [
                {
                  id: 89,
                  label: "Statut marital",
                  link: "/settings/dns/marital",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Etudes",
                  link: "/settings/dns/study-level",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Ethnies",
                  link: "/settings/dns/ethnicity",
                  parentId: 86,
                },
                {
                  id: 89,
                  label: "Profession du patient",
                  link: "/settings/dns/profession",
                  parentId: 86,
                },
              ],
            },
            {
              id: 89,
              label: "Actes Médicaux",
              parentId: 86,
              subItems: [
                {
                  id: 89,
                  label: "Catégorie d'analyse",
                  link: "/settings/dns/cat-analyse",
                  parentId: 86,
                },
              ],
            },
            {
              id: 89,
              label: "Unités",
              parentId: 86,
              subItems: [
                {
                  id: 89,
                  label: "rechercher",
                  link: "/settings/dns/unites",
                  parentId: 86,
                },
              ],
            },
          ],
        },
      ],
    };
    if (userRight?.HasMyOrganismRight) {
      el.subItems.push({
        id: 89,
        label: "Mon organisation",
        parentId: 86,
        link: "/settings/mon-org",
      });
    }
    if (userRight?.HasUserProfilRight) {
      el.subItems.push({
        id: 86,
        label: "Roles",
        parentId: 84,
        subItems: [
          {
            id: 90,
            label: "Creer",
            link: "/roles/create/",
            parentId: 86,
          },
          {
            id: 87,
            label: "Liste",
            link: "/roles/list",
            parentId: 86,
          },
        ],
      });
    }
    if (userRight?.hasNationalDataRight) {
      el.subItems.push({
        id: 89,
        label: "Mon organisation",
        parentId: 86,
        link: "/settings/mon-org",
      });
    }
    this.menuItems.push(el);
    //  }
  }
}
