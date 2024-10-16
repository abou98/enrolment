import { environment as globalEnvironment } from "src/environments/dev/env.global";

export const environment = {
  production: false,
  version: "1.0.0",
  apiKey: "",
  defaultauth: "fackbackend",
  projectTitle: "SI Médical",
  projectName: "eyone",
  projectDesc: "SI Médical",
  ...globalEnvironment,
};
