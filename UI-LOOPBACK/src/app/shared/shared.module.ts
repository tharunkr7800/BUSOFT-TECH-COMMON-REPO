import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { EditorModule } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { DialogModule} from 'primeng/dialog';
import { PanelModule } from 'primeng/panel'
import {TimelineModule} from 'primeng/timeline';
import { ContactListComponent } from './contact-list/contact-list.component';
import { IncidentListComponent } from './incident-list/incident-list.component';
import { NotesComponent } from './notes/notes.component';
import { MessageThreadsComponent } from './message-threads/message-threads.component';
import { FormComponent } from './form/form.component';
import { TabsComponent } from './tabs/tabs.component';
import { AuditlogComponent } from './auditlog/auditlog.component';
import { AttachementsComponent } from './attachements/attachements.component';
import { TimelineComponent } from './timeline/timeline.component';
@NgModule({
  declarations: [
    ContactListComponent,
    IncidentListComponent,
    NotesComponent,
    MessageThreadsComponent,
    FormComponent,
    TabsComponent,
    AuditlogComponent,
    AttachementsComponent,
    TimelineComponent
   ],
   exports: [
    ContactListComponent,
    IncidentListComponent,
    NotesComponent,
    MessageThreadsComponent,
    FormComponent,
    TabsComponent,
    AuditlogComponent,
    AttachementsComponent,
    TimelineComponent
   ],
  imports: [
    CommonModule,
    TimelineModule,
    AutoCompleteModule,
    CalendarModule,
    EditorModule,
    InputTextModule,
    TabViewModule,
    TableModule,
    DialogModule,
    PanelModule
  ]
})
export class SharedModule { }
