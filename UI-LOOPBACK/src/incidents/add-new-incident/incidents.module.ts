import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsRoutingModule } from './incidents-routing.module';
import { IncidentsComponent } from './incidents.component';
import { CalendarModule } from 'primeng/calendar';
import { SharedModule } from '../shared/shared.module';
@NgModule({
  declarations: [
    IncidentsComponent
  ],
  imports: [
    CommonModule,
    IncidentsRoutingModule,
    CalendarModule,
    SharedModule
  ]
})
export class IncidentsModule { }
