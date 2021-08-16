import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.scss']
})
export class ContactListComponent implements OnInit {
  contacts = [
    { lastname: 'Rajkumar', firstname: 'Kumar', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled", interactions:1,incId:"001"},
    { lastname: 'John', firstname: 'Ramesh', organization: 'inexgen' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Krishna', firstname: 'Koyal', organization: 'sony' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Karthik', firstname: 'Kanna', organization: 'samsung' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"},
    { lastname: 'Austin', firstname: 'John', organization: 'Swimlane' ,email:"test@test.com",phone:"9090909",status:"Disbled",interactions:1,incId:"001"}
  ];
  constructor(private _router:Router) { }

  onSelect(data:any){
    const params : NavigationExtras = {
      queryParams:{
        incidentInfo: JSON.stringify(data)
      },
      skipLocationChange:false
    }
    this._router.navigate(["/editPeople"],params);
  }
  ngOnInit(): void {
  }

}
