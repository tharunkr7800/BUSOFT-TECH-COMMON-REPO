import { Component, OnInit, OnDestroy} from '@angular/core';
import { IncidentService } from 'src/app/services/incident.service';
import { Subscription } from 'rxjs';
import { formData } from 'src/app/model/data-model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
@Component({
  selector: 'app-edit-incident',
  templateUrl: './edit-incident.component.html',
  styleUrls: ['./edit-incident.component.scss']
})
export class EditIncidentComponent implements OnInit,OnDestroy {
  incidentSubscription:Subscription;
  contactSubscription:Subscription;
  formData?:formData;
  contactData?:formData;
  incidentReference:string;
  constructor(private incidentService:IncidentService,private _router:ActivatedRoute) {
    this.incidentSubscription  = new Subscription();
    this.contactSubscription = new Subscription();
    this.formData = undefined;
    this.contactData = undefined;
    this.incidentReference = '';
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
    this._router.queryParams.subscribe(data => {
      if(data['incidentInfo']){
        let incidentInfo = JSON.parse(data['incidentInfo']);
        console.log("incidentINfo",incidentInfo);
        this.incidentReference = incidentInfo.reference;
      }
    })
  }
  ngOnDestroy(){
    this.incidentSubscription.unsubscribe();
    this.contactSubscription.unsubscribe();
  }

}
