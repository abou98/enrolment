import { environment as globalEnvironment } from "src/environments/preprod/env.global";

export const environment = {
  production: false,
  version: "1.0.0",
  projectTitle: "SI Médical",
  projectName: "eyone",
  projectDesc: "SI Médical",
  ...globalEnvironment,
};