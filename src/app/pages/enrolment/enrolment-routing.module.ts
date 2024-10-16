import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEnroleComponent } from './list-enrole/list-enrole.component';
import { EnroleComponent } from './enrole/enrole.component';
import { DetailsEnroleComponent } from './details-enrole/details-enrole.component';



const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
   {
    path: 'list', component:  ListEnroleComponent,
  },
  {
    path: 'enrole', component: EnroleComponent
  },
  {path: 'enrole/:id', component: DetailsEnroleComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnrolementRoutingModule { }
