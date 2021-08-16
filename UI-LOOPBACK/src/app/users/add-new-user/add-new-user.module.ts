import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InputTextModule} from 'primeng/inputtext';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { TableModule } from 'primeng/table';
import {FileUploadModule} from 'primeng/fileupload';
import {HttpClientModule} from '@angular/common/http';
import {PasswordModule} from 'primeng/password';
import { AddNewUserComponent } from './add-new-user.component';
import {AddNewRoutingModule} from './add-new-user.routing.module'
@NgModule({
  declarations: [
    AddNewUserComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    AutoCompleteModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    PasswordModule,
    AddNewRoutingModule
  ]
})
export class AddNewUserModule { }
