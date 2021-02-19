import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Datasuf1PageComponent } from './datasuf1-page/datasuf1-page.component'

const routes: Routes = [
  {
    path: "",
    component: Datasuf1PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSuf1RoutingModule { }
