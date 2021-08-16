import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auditlog',
  templateUrl: './auditlog.component.html',
  styleUrls: ['./auditlog.component.scss']
})
export class AuditlogComponent implements OnInit {
  auditlogs = [
    { when: '12/01/2021 11.00', who: 'Rajkumar', what: 'Edited the list', description:"from web console contact"},
    { when: '12/02/2021 11.15', who: 'Test', what: 'Edited the list', description:"from web console contact"},
    { when: '12/01/2021 11.00', who: 'Test', what: 'Edited the list', description:"from web console contact"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
