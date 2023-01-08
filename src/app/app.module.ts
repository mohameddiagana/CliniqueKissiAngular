import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { RendezVousComponent } from './rendez-vous/rendez-vous.component';
import { MedecinsComponent } from './medecins/medecins.component';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    RendezVousComponent,
    MedecinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
