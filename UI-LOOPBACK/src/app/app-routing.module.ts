import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const login = () => import('./login/login.module').then(m => m.LoginModule);
const dashboard = () => import('./dashboard/dasboard.module').then(m => m.DasboardModule);
const contact = () => import('./contacts/contacts.module').then(m => m.ContactsModule);
const newContact = () => import('./contacts/add-new-contact/add-new-contact.module').then(m => m.AddNewContactModule);
const editContact = () => import('./contacts/edit-contact/edit-contact.module').then(m => m.EditContactModule);
const users = () => import('./users/users.module').then(m => m.UsersModule);
const newUser = () => import('./users/add-new-user/add-new-user.module').then(m => m.AddNewUserModule);
const incident = () => import('./incidents/incidents.module').then(m => m.IncidentsModule);
const newIncident = () => import('./incidents/add-new-incident/add-new-incident.module').then(m => m.AddNewIncidentModule);
const editIncident = () => import('./incidents/edit-incident/edit-incident.module').then(m => m.EditIncidentModule);
const reports = () => import('./reports/reports.module').then(m => m.ReportsModule);
const routes: Routes = [
  {
    path:'dashboard',
    loadChildren:dashboard
  },
  {
    path: 'login',
    loadChildren: login
  },
  {
    path: 'interaction',
    loadChildren: incident
  },
  {
    path: 'newInteraction',
    loadChildren: newIncident
  },
  {
    path:'editInteraction',
    loadChildren: editIncident
  },
  {
    path:'people',
    loadChildren: contact
  },
  {
    path:'newPeople',
    loadChildren: newContact
  },
  {
    path:'editPeople',
    loadChildren: editContact
  },
  {
    path:'agents',
    loadChildren: users
  },
  {
    path:'newAgents',
    loadChildren: newUser
  },
  {
    path:'editAgents',
    loadChildren: newUser
  },
  {
    path:'reports',
    loadChildren: reports
  },
  {
    path:'**',
    loadChildren:dashboard
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
