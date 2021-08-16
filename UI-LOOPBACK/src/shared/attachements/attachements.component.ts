import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attachements',
  templateUrl: './attachements.component.html',
  styleUrls: ['./attachements.component.scss']
})
export class AttachementsComponent implements OnInit {
  attachments = [
    { name: 'image.jpg', size: '8.14kb', created: '08/092020 08:51', updated:"08/09/2020 08:55", description:"Analytics",private:"CRM Support",action:"12/12/2021"},
    { name: 'image.jpg', size: '8.14kb', created: '08/092020 08:51', updated:"08/09/2020 08:55", description:"Analytics",private:"CRM Support",action:"12/12/2021"},
    { name: 'image.jpg', size: '8.14kb', created: '08/092020 08:51', updated:"08/09/2020 08:55", description:"Analytics",private:"CRM Support",action:"12/12/2021"}
  ];
  constructor() { }

  ngOnInit() {
  }

}
