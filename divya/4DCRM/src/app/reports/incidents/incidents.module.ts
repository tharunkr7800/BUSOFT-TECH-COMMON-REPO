import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
@NgModule({
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    AutoCompleteModule,
    CalendarModule,
    TooltipModule
  ],
  exports:[IncidentsComponent],
  declarations: [IncidentsComponent]
})
export class IncidentsModule { }
