import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsComponent } from './contacts.component';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
@NgModule({
  imports: [
    CommonModule,
    TableModule,
    DropdownModule,
    MultiSelectModule,
    FormsModule,
    ButtonModule,
    TooltipModule
  ],
  exports:[ContactsComponent],
  declarations: [ContactsComponent]
})
export class ContactsModule { }
