import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormulaPageComponent } from './formula-page/formula-page.component'

const routes: Routes = [
  {
    path:"",
    component:FormulaPageComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormulaRoutingModule { }
