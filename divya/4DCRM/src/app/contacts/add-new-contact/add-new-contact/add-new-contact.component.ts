import { Component, OnInit,OnDestroy } from '@angular/core';
import { formData } from 'src/app/model/data-model';
import { ContactsService} from './../../services/contacts.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-new-contact',
  templateUrl: './add-new-contact.component.html',
  styleUrls: ['./add-new-contact.component.scss']
})
export class AddNewContactComponent implements OnInit {
  formDataSubscription:Subscription;
  formData?:formData;
  constructor(private contactsService:ContactsService) {
    this.formDataSubscription = new Subscription();
    this.formData = undefined;

  }
  getFormData(){
    return this.contactsService.getContactInfo();
  }
  ngOnInit() {
    this.formDataSubscription = this.getFormData().subscribe(res => {
      this.formData = res;
      console.log(this.formData);
    });
  }
 ngOnDestroy(){
   this.formDataSubscription.unsubscribe();
 }
}
