import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddNewIncidentComponent} from './add-new-incident.component'
const routes: Routes = [{
  path:'',
  component:AddNewIncidentComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddNewIncidentRoutingModule { }
