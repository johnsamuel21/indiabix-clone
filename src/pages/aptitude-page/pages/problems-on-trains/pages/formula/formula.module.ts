import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormulaRoutingModule } from './formula-routing.module';
import { FormulaPageComponent } from './formula-page/formula-page.component';
import { SharedModule } from '../../../../../shared/shared.module';
import { FormulaBodyComponent } from './formula-body/formula-body.component';
import { FormulaContentComponent } from './formula-content/formula-content.component'


@NgModule({
  declarations: [FormulaPageComponent, FormulaBodyComponent, FormulaContentComponent],
  imports: [
    CommonModule,
    FormulaRoutingModule,
    SharedModule
  ]
})
export class FormulaModule { }
