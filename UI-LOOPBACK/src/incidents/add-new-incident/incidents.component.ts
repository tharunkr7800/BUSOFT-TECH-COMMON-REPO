import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.scss']
})

export class IncidentsComponent implements OnInit {
  incidents = [
    { reference: '202101-00001', subject: 'Ringing when call listening', status: 'Solved',action:"120d 15h 14m",product:"Analytics",assigned:"CRM Support",date:"12/12/2021"},
    { reference: '202101-00002', subject: 'Ringing when call listening', status: 'Solved',action:"120d 15h 14m",product:"Analytics",assigned:"CRM Support",date:"12/12/2021"},
    { reference: '202101-00002', subject: 'Ringing when call listening', status: 'Solved',action:"120d 15h 14m",product:"Analytics",assigned:"CRM Support",date:"12/12/2021"}
  ];
  constructor(private _router:Router) { }
  onSelect(data:any){
    const params : NavigationExtras = {
      queryParams:{
        incidentInfo: JSON.stringify(data)
      },
      skipLocationChange:false
    }
    this._router.navigate(["/interactionInfo"],params);
  }


  ngOnInit(): void {
  }

}
