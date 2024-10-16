// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration=production --aot --output-hashing=all --build-optimizer` with `environment.prod.ts`.
// `ng build --configuration=develop --aot --output-hashing=all --build-optimizer` with `environment.dev.ts`.
// node --max_old_space_size=8048 ./node_modules/@angular/cli/bin/ng serve
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: "fackbackend",
  // Machine d'ADAMA ne pas modifier (Fatou, Mohamed): 'http://15.188.89.99:9999/medical/'
  // DEV: 'http://ec2-13-37-243-38.eu-west-3.compute.amazonaws.com:9999/medical/'
  loginUrl: "http://localhost:9797/admin/",
  // apiUrl:
  //   "https://integration.eyone.net/medical/sapi/rest/v1",
  apiUrl: "http://localhost:9797/admin/sapi/rest/v1",
  theApiUrl: "http://localhost:9797/admin/api/rest/v1",
  eyAssur: "https://dpp-apps-preprod.eyone.net/admin/api/rest/v1/",
  medical: "https://dpp-apps-preprod.eyone.net/admin/sapi/rest/v1/",
  ms: "https://medicalsuite.eyone.net/passeport/api/rest/",
  passportUrl: "https://medicalsuite.eyone.net/passeport/api/rest/v1/",
  productModule:
    "http://localhost:7979/products-admin/sapi/rest/v1/",
  patientModule:
    "http://localhost:7878/patients-admin/sapi/rest/v1/",
  commonModule:
    "http://localhost:7777/medical-commons-data/sapi/rest/v1/",
  billingModule:
    "http://localhost:9595/medical-billing/sapi/rest/v1",
  medicalApptModule:
    "http://localhost:9696/medical-appointment/sapi/rest/v1",
  patientFileModule:
    "http://localhost:9494/patient-file/sapi/rest/v1",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.

// http://ec2-13-37-243-38.eu-west-3.compute.amazonaws.com:9999/medical/
