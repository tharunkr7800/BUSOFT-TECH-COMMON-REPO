import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditIncidentRoutingModule } from './edit-incident-routing.module';
import { SharedModule } from './../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { EditIncidentComponent } from './edit-incident.component';
@NgModule({
  declarations: [EditIncidentComponent],
  imports: [
    CommonModule,
    EditIncidentRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class EditIncidentModule { }
