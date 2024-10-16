// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --configuration=production --aot --output-hashing=all --build-optimizer` with `environment.prod.ts`.
// `ng build --configuration=develop --aot --output-hashing=all --build-optimizer` with `environment.dev.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  defaultauth: "fackbackend",
  // Machine d'ADAMA ne pas modifier (Fatou, Mohamed): 'http://15.188.89.99:9999/medical/'
  // DEV: 'http://ec2-13-37-243-38.eu-west-3.compute.amazonaws.com:9999/medical/'
  loginUrl: "http://localhost:9797/medical/",
  apiUrl: "http://localhost:9797/medical/sapi/rest/v1",
  theApiUrl: "http://localhost:9797/medical/api/rest/v1",
  eyAssur: "http://localhost:9797/medical/api/rest/v1/",
  medical: "http://localhost:9797/admin/sapi/rest/v1/",
  ms: "https://localhost:9898/passeport/api/rest/",
  passportUrl: "https://localhost:9898/passeport/api/rest/v1/",
  productModule: "http://localhost:9999/products-admin/",
  
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
