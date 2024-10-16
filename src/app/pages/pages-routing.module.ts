import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  { path: "", component: DashboardComponent },
  {path: 'enrolement', loadChildren: () => import('./enrolment/enrolment.module').then(m => m.EnrolementModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
