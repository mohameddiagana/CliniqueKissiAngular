import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

patients! :Array<any>
  constructor() { }

  ngOnInit(): void {
    this.patients =[
      {codep:1, nom:"diagana",prenom: "mohamed bocar",
      email:"mdiaganaisi.sn",tel: 454578788,sexe:"male",
      datanaissance:"26/10/2000",adresse: "sahm"},

     {codep:20, nom:"salim",prenom:"ba",email:"dia@yahoo.com",
     tel:7854451254,sexe:"male",datenaissance:"14/20/2020",adresse:"jjj"},

     {codep:2, nom:"fatima",prenom:"bakassime",email:"dia@yahoo.com",
     tel:7854451254,sexe:"femele",datenaissance:"15/20/2010",adresse:"medina"},

    ];


  }
    handleDeletePatient(p: any){
      let index = this.patients.indexOf(p);
      this.patients.splice(index,1);
    }
}

