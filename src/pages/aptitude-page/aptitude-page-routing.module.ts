import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AptitudeBodyComponent } from './aptitude-body.component';

const routes: Routes = [
  {
    path: "",
    component:AptitudeBodyComponent,
  },
  {
    path:"problems-on-trains",
    loadChildren: () =>
    import('./pages/problems-on-trains/problems-on-trains.module').then((m) => m.ProblemsOnTrainsModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AptitudePageRoutingModule { }
