import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CurrentAffairsComponent } from './current-affairs.component';

const routes: Routes = [
  {
    path: "",
    component:CurrentAffairsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CurrentAffairsRoutingModule { }
