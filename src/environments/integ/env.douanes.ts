import { environment as globalEnvironment } from "src/environments/integ/env.global";

export const environment = {
  production: false,
  version: "1.0.0",
  projectTitle: "Gestion Médicale Douanes",
  projectName: "douanes",
  projectDesc: "Gestion Médicale Douanes",
  ...globalEnvironment,
};
