/* This code snippet is defining an object named `environment` in TypeScript. This object contains
various API endpoints as key-value pairs. Each key represents a specific API endpoint related to
different modules or services within the application. The values are the corresponding URLs for each
endpoint. */
export const environment = {  
  // TODO: Change endpoint in dns to simplify
  // API ENDPOINTS
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

  notificationModule: "https://dpp-apps-preprod.eyone.net/notification-service/api/",
   reminderModule: "https://dpp-apps-preprod.eyone.net/reminder-service/sapi/rest/v1/"
};
