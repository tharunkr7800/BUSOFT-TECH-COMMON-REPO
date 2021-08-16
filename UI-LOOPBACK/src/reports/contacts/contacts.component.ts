import { Component, Input, OnInit } from '@angular/core';
import { FileExportService } from './../../services/file-export.service';
export interface incident{
  firstname:string,
  lastname:string,
  email:string,
  incidents:string
}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
  incidents: incident[];
  cols: any[];
  selectedColumns: any[];
  constructor(private fileSaver:FileExportService) {
    this.incidents = [];
    this.cols = [];
    this.selectedColumns = [];
  }
  exportExcel(){
    this.fileSaver.exportExcel(this.incidents,'people');
  }
  ngOnInit() {
    this.incidents = [
      {
        firstname:'John',
        lastname:'Micheal',
        email:'John@outlook.com',
        incidents:'5'
      },
      {
        firstname:'Simon',
        lastname:'Peter',
        email:'sinom@outlook.com',
        incidents:'4'
      },
      {
        firstname:'Morgan',
        lastname:'Stanely',
        email:'mstanely@gmail.com',
        incidents:'5'
      },
      {
        firstname:'Kim',
        lastname:'Micheal',
        email:'kim@outlook.com',
        incidents:'2'
      },
      {
        firstname:'John',
        lastname:'Micheal',
        email:'John@outlook.com',
        incidents:'5'
      }
    ];
    this.cols = [
      { field: 'firstname', header: 'FirstName' },
      { field: 'lastname', header: 'Lastname' },
      { field: 'email', header: 'Email'},
      { field: 'incidents', header: 'Incidents'}
  ];

  }
}
