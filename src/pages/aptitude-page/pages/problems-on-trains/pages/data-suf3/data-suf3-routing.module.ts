import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Datasuf3PageComponent } from './datasuf3-page/datasuf3-page.component'

const routes: Routes = [
  {
    path: "",
    component:Datasuf3PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSuf3RoutingModule { }
