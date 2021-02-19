import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrainProblemPageComponent } from './train-problem-page.component';

const routes: Routes = [
  {
    path:"",
    component:TrainProblemPageComponent,
  },
  {
    path: "formula",
    loadChildren: () =>
    import('./pages/formula/formula.module').then((m) => m.FormulaModule)
  },
  {
    path: "data-suf1",
    loadChildren: () =>
    import('./pages/data-suf1/data-suf1.module').then((m) => m.DataSuf1Module)
  },
  {
    path: "data-suf2",
    loadChildren: () =>
    import('./pages/data-suf2/data-suf2.module').then((m) => m.DataSuf2Module)
  },
  {
    path: "data-suf3",
    loadChildren: () =>
    import('./pages/data-suf3/data-suf3.module').then((m) => m.DataSuf3Module)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProblemsOnTrainsRoutingModule { }
