import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent {

  douanesContext: string = "douanes";
  msasContext: string = "msas";
  eyoneContext: string = "eyone";

}
