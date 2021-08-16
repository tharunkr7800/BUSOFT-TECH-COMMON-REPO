import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewContactComponent } from './add-new-contact.component'
const routes: Routes = [
  {
    path:'',
    component:AddNewContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewContactRoutingModule { }
