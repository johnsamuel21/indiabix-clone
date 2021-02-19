import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogicalBodyComponent } from './logical-body.component';

const routes: Routes = [
  {
    path: "",
    component:LogicalBodyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogicalPageRoutingModule { }
