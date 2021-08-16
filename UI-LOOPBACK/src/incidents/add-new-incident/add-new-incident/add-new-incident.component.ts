import { Component, OnInit } from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { Subscription } from 'rxjs';
import { formData } from 'src/app/model/data-model';
@Component({
  selector: 'app-add-new-incident',
  templateUrl: './add-new-incident.component.html',
  styleUrls: ['./add-new-incident.component.scss']
})
export class AddNewIncidentComponent implements OnInit {
  incidentSubscription:Subscription;
  contactSubscription:Subscription;
  formData?:formData;
  contactData?:formData;
  constructor(private incidentService:IncidentService) {
    this.incidentSubscription  = new Subscription();
    this.contactSubscription = new Subscription();
    this.formData = undefined;
    this.contactData = undefined;
  }

  getIncidents(){
    this.incidentSubscription = this.incidentService.getIncidentInfo().subscribe(res => {
      this.formData = res;
      console.log('new incidents',this.formData);
    })
  }

  getContacts(){
    this.contactSubscription = this.incidentService.getContactInfo().subscribe(res => {
      this.contactData = res;
    })
  }
  ngOnInit() {
    this.getIncidents();
    this.getContacts();
  }
  ngOnDestroy(){
    this.incidentSubscription.unsubscribe();
    this.contactSubscription.unsubscribe();
  }
}
