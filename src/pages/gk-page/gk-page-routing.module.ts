import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GkComponent } from './gk.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "questions-and-answers",
    pathMatch: 'full',
  },
  {
    path:"questions-and-answers",
    component:GkComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GkPageRoutingModule { }
