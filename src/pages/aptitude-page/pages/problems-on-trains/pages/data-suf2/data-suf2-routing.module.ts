import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { Datasuf2PageComponent } from './datasuf2-page/datasuf2-page.component'

const routes: Routes = [
  {
    path: "",
    component: Datasuf2PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataSuf2RoutingModule { }
