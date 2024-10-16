import { environment as globalEnvironment } from "src/environments/integ/env.global";

export const environment = {
  production: false,
  version: "1.0.0",
  projectTitle: "Dossier Patient Unique Partagé",
  projectName: "msas",
  projectDesc: "DPUP",
  ...globalEnvironment,
};
