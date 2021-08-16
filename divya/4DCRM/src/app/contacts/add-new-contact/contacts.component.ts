import { Component, Input, OnInit } from '@angular/core';
import { Router,NavigationExtras} from '@angular/router';
import { ContactsService } from '../services/contacts.service';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})


export class ContactsComponent implements OnInit {
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
  contactsfromdb: any;

  constructor(
    private _router:Router,
    private contactsService:ContactsService,
    
    ) { }

  @Input() SearchContactData = { 
    "lastName": "",
    "officePhoneNo": "",
    "email":""
    };

  errorMessage='';

  onSelect(data:any){
    const params : NavigationExtras = {
      queryParams:{
        incidentInfo: JSON.stringify(data)
      },
      skipLocationChange:false
    }
    this._router.navigate(["/editpeople"],params);
  }
  ngOnInit(): void {
  }

  searchContact(){
    console.log(typeof this.SearchContactData.officePhoneNo);
    console.log(typeof this.SearchContactData.email);
    this.contactsService.searchContactInfo(this.SearchContactData)
    .subscribe(
      data => {
        console.log(data);
        this.contactsfromdb =data

      },
      err=>{
        this.errorMessage = err.error.message;
        console.log(this.errorMessage);
        window.alert("Invalid Email/Password");
        // this.isLoginFailed = true;
      })
  }
}
