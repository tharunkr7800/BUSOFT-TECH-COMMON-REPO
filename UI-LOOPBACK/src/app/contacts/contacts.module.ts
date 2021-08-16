import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsRoutingModule } from './contacts-routing.module';
import { ContactsComponent } from './contacts.component';
import { TableModule } from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {InputTextModule} from 'primeng/inputtext';
import {SharedModule} from './../shared/shared.module'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ContactsComponent
  ],
  imports: [
    CommonModule,
    ContactsRoutingModule,
    TableModule,
    ButtonModule,
    TooltipModule,
    InputTextModule,
    SharedModule,
    FormsModule
  ]
})
export class ContactsModule { }
