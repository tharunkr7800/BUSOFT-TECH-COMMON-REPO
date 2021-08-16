import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportsRoutingModule } from './reports-routing.module';
import { ReportsComponent } from './reports.component';
import { ContactsModule } from './contacts/contacts.module';
import { IncidentsModule } from './incidents/incidents.module';
import { UsersModule } from './users/users.module';

@NgModule({
  declarations: [
    ReportsComponent
  ],
  imports: [
    CommonModule,
    ContactsModule,
    IncidentsModule,
    UsersModule,
    ReportsRoutingModule
  ]
})
export class ReportsModule { }
