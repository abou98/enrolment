import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
} from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { DEFAULT_INTERRUPTSOURCES, Idle } from "@ng-idle/core";
import {
  ConnectionService,
  ConnectionServiceOptions,
  ConnectionState,
} from "ng-connection-service";
import { Subscription, tap } from "rxjs";
import Swal from "sweetalert2";
import { AuthService } from "./core/services/authentication.service";
import { Title } from "@angular/platform-browser";
import { environment } from "src/environments/environment";
import { SecurelsService } from "./core/services/securels.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit, AfterViewInit {
  title = "DPP";
  isConnected: any = null;
  noInternetConnection: boolean;
  idleState = "NOT_STARTED";
  countdown?: number = null;

  currentState!: ConnectionState;
  subscription = new Subscription();

  constructor(
    private translate: TranslateService,
    private connectionService: ConnectionService,
    private idle: Idle,
    cd: ChangeDetectorRef,
    private auth: AuthService,
    private titleService: Title,
    private securels: SecurelsService
  ) {
    translate.setDefaultLang("fr");
    translate.use("fr");

    idle.setIdle(2700);
    idle.setTimeout(30);
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);
    idle.onIdleStart.subscribe(() => {
      this.idleState = "IDLE";
    });
    idle.onIdleEnd.subscribe(() => {
      this.idleState = "NOT_IDLE";
      this.countdown = null;
      cd.detectChanges();
      Swal.close();
    });
    idle.onTimeout.subscribe(() => {
      this.idleState = "TIMED_OUT";
      Swal.close();
      auth.logout();
    });
    idle.onTimeoutWarning.subscribe((seconds) => {
      this.countdown = seconds;
      if (this.countdown === null) {
        Swal.close();
      }
      Swal.fire({
        title: `Votre session va expirer dans: ${seconds}.`,
        text: `Appuyez sur n'importe quelle touche pour annuler.`,
        position: "top-end",
        showConfirmButton: false,
        toast: true,
        background: "#C4860E",
      });
    });
  }

  reset() {
    this.idle.watch();
    this.idleState = "NOT_IDLE";
    this.countdown = null;
  }

  ngAfterViewInit(): void {
    let currentUser = this.securels.getData("currentUser");
    if (currentUser?.access_token) {
      this.reset();
    }
  }

  ngOnInit(): void {
    this.titleService.setTitle(environment.projectTitle);
    this.checkAppVersion();
    const options: ConnectionServiceOptions = {
      enableHeartbeat: false,
      heartbeatUrl: "https://localhost:4000",
      heartbeatInterval: 2000,
    };

    this.subscription.add(
      this.connectionService
        .monitor(options)
        .pipe(
          tap((newState: ConnectionState) => {
            this.currentState = newState;

            if (!this.currentState.hasNetworkConnection) {
              this.noInternetConnection = true;
              Swal.fire(
                "Connexion internet perdue",
                "Vérifiez que vous êtes connecté(e) au wifi ou aux données mobiles.",
                "warning"
              );
            }

            if (
              this.currentState.hasNetworkConnection &&
              this.noInternetConnection
            ) {
              this.noInternetConnection = false;
              Swal.fire({
                title: "Connexion internet restaurée",
                icon: "success",
                text: "Vous êtes de nouveau connecté(e) à internet.",
                showConfirmButton: false,
                timer: 3000,
              });
            }
          })
        )
        .subscribe()
    );
  }

  onActivate(event) {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  connectivityListener() {
    this.connectionService.monitor().subscribe((isConnected) => {
      this.isConnected = isConnected;
      if (this.isConnected) {
        this.noInternetConnection = false;
        Swal.fire({
          title: "Connexion internet restaurée",
          icon: "success",
          text: "Vous êtes de nouveau connecté(e) à internet.",
          showConfirmButton: false,
          timer: 3000,
        });
      } else {
        this.noInternetConnection = true;
        Swal.fire(
          "Connexion internet perdue",
          "Vérifiez que vous êtes connecté(e) au wifi ou aux données mobiles.",
          "warning"
        );
      }
    });
  }

  checkAppVersion() {
    const currentVersion = environment.version;
    const storedVersion = this.securels.getData("appVersion");

    if (!storedVersion) {
      localStorage.removeItem("sn");
      localStorage.removeItem("currentUser");
      localStorage.removeItem("prestationCxt");
      localStorage.removeItem("pmAuthenticated");
      this.securels.saveData("appVersion", currentVersion);
    }
  }
}
