import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-incident-list',
  templateUrl: './incident-list.component.html',
  styleUrls: ['./incident-list.component.scss']
})
export class IncidentListComponent implements OnInit {
  incidents = [
    { reference: '202101-00001', subject: 'Data access restricted', status: 'Solved',action:"120d 15h 14m",product:"Analytics",assigned:"CRM Support",date:"12/12/2021"},
    { reference: '202101-00002', subject: 'Downloaded files corrupted', status: 'Solved',action:"120d 15h 14m",product:"Analytics",assigned:"CRM Support",date:"12/12/2021"},
    { reference: '202101-00002', subject: 'Mobile data disabled', status: 'Solved',action:"120d 15h 14m",product:"Analytics",assigned:"CRM Support",date:"12/12/2021"}
  ];
  constructor(private _router:Router) { }
  onSelect(data:any){
    const params : NavigationExtras = {
      queryParams:{
        incidentInfo: JSON.stringify(data)
      },
      skipLocationChange:false
    }
    this._router.navigate(["/editInteraction"],params);
  }
  ngOnInit() {
  }

}
