import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SecurelsService } from 'src/app/core/services/securels.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EnrolmentService {

    private apiUrl = environment.notificationModule;
    private apiUrlOrganism = environment.apiUrl;
   constructor(private http: HttpClient, private securels: SecurelsService) { }

    findAllEnroles(param): Observable<any> {
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };

    return this.http
      .get(this.apiUrl + "notifications", httpOptions)
  }



  getNotifByOrganism(id: number): Observable<any> {
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .get(this.apiUrl + "notifications/by-organism/" + id, httpOptions)
  }

  getOrganisms(): Observable<any> {
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };

    return this.http
      .get(this.apiUrlOrganism + "/organism-entities", httpOptions)
  }

  

  getAllPatients(term) {
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });
    return this.http.get<any>(
      environment.patientModule + "patients/params/" + term,
      {
        headers: headers,
      }
    );
  }


  send(data): Observable<any> {
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .post(this.apiUrl + "notifications/send", data, httpOptions)
  }




  push(data): Observable<any> {

    console.log('Push');
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .post(this.apiUrl + "notifications/push-notifications/by-organism" , data, httpOptions)
  }



  getStaff(): Observable<any> {
    let currentUser = this.securels.getData("currentUser");
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });

    return this.http.get(this.apiUrlOrganism + "/" + "organism-users", {
      headers: headers,
    });
  }


  getStaffPagination(search): Observable<any> {
    let currentUser = this.securels.getData("currentUser");
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json",
      Authorization: `Bearer ${auth_token}`,
    });

    return this.http.get(this.apiUrlOrganism + "/" + "organism-users/paginated/"+search, {
      headers: headers,
    });
  }


  getStatistiquesNotifs(){

    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .get(this.apiUrl + "notifications/statistiques", httpOptions)
  }

  getStatistiquesByOrganismNotifs(id: number){
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .get(this.apiUrl + "notifications/count/by-status/" + id, httpOptions)
  }

    getStatistiquesReminders(){

    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .get(this.apiUrl + "notifications/statistiques", httpOptions)
  }

  getStatistiquesByOrganismReminders(id: number){
    let currentUser = this.securels.getData("currentUser")
    let auth_token = currentUser.access_token;
    let headers = new HttpHeaders({
      "Content-Type": "application/json-patch+json",
      Authorization: `Bearer ${auth_token}`,
    });
    const httpOptions = {
      headers: headers
    };
    return this.http
      .get(this.apiUrl + "notifications/statistiques/by-organism/" + id, httpOptions)
  }


}
