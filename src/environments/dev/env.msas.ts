import { environment as globalEnvironment } from "src/environments/dev/env.global";

export const environment = {
  production: false,
  version: "1.0.0",
  defaultauth: "fackbackend",
  projectTitle: "Dossier Patient Unique Partagé",
  projectName: "msas",
  projectDesc: "DPUP",
  ...globalEnvironment,
};
