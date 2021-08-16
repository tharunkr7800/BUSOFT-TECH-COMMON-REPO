import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormRoutingModule } from './dynamic-form-routing.module';
import { DynamicFormComponent } from './dynamic-form.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
@NgModule({
  declarations: [DynamicFormComponent],
  imports: [
    CommonModule,
    DynamicFormRoutingModule,
    AutoCompleteModule
  ]
})
export class DynamicFormModule { }
