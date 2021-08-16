import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddNewContactComponent} from './add-new-contact.component';
import {AddNewContactRoutingModule} from './add-new-contact-routing.module';
import {ButtonModule} from 'primeng/button';
import { SharedModule } from 'src/app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AddNewContactComponent],
  imports: [
    CommonModule,
    ButtonModule,
    AddNewContactRoutingModule,
    HttpClientModule,
    SharedModule
  ]
})
export class AddNewContactModule { }
