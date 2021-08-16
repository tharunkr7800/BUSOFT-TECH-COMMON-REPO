import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewIncidentRoutingModule } from './add-new-incident-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { AddNewIncidentComponent } from './add-new-incident.component'
@NgModule({
  declarations: [AddNewIncidentComponent],
  imports: [
    CommonModule,
    AddNewIncidentRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AddNewIncidentModule { }
