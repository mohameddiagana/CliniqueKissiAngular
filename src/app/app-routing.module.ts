import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MedecinsComponent } from './medecins/medecins.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';

const routes: Routes = [
  {path:"patients", component : PatientsComponent},
  {path:"rendez-vous", component : RendezVousComponent},
  {path:"medecins", component : MedecinsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
