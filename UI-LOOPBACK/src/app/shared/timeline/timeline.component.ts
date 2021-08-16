import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  events:any[];
  constructor() {
    this.events = [
      {createdon: '12/10/2020', status:'waiting', reference: '001212', assignedTo: 'Test User', subject: 'Test Subject', callreason: 'Test Reason', calloutcome:'waiting'},
      {createdon: '12/10/2020', status:'waiting', reference: '001212', assignedTo: 'Test User', subject: 'Test Subject', callreason: 'Test Reason', calloutcome:'waiting'},
      {createdon: '12/10/2020', status:'solved', reference: '001212', assignedTo: 'Test User', subject: 'Test Subject', callreason: 'Test Reason', calloutcome:'solved'},
      {createdon: '12/10/2020', status:'updated',reference: '001212', assignedTo: 'Test User', subject: 'Test Subject', callreason: 'Test Reason', calloutcome:'updated'}
  ];
   }

  ngOnInit() {
  }

}
