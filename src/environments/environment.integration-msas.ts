// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: "fackbackend",
  projectTitle: "Dossier Patient Partagé",
  projectName: "msas",
  projectDesc: "DPP",
  loginUrl: "https://dpp-apps-preprod.eyone.net/admin/",
  apiUrl: "https://dpp-apps-preprod.eyone.net/admin/sapi/rest/v1",
  theApiUrl: "https://dpp-apps-preprod.eyone.net/admin/api/rest/v1",
  eyAssur: "https://dpp-apps-preprod.eyone.net/admin/api/rest/v1/",
  medical: "https://dpp-apps-preprod.eyone.net/admin/sapi/rest/v1/",
  ms: "https://medicalsuite.eyone.net/passeport/api/rest/",
  passportUrl: "https://medicalsuite.eyone.net/passeport/api/rest/v1/",
  productModule:
    "https://dpp-apps-preprod.eyone.net/products-admin/sapi/rest/v1/",
  patientModule:
    "https://dpp-apps-preprod.eyone.net/patients-admin/sapi/rest/v1/",
  commonModule:
    "https://dpp-apps-preprod.eyone.net/medical-commons-data/sapi/rest/v1/",
  billingModule:
    "https://dpp-apps-preprod.eyone.net/medical-billing/sapi/rest/v1",
  medicalApptModule:
    "https://dpp-apps-preprod.eyone.net/medical-appointment/sapi/rest/v1",
  patientFileModule:
    "https://dpp-apps-preprod.eyone.net/patient-file/sapi/rest/v1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
