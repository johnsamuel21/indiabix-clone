import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PuzzlesRoutingModule } from './puzzles-routing.module';
import { PuzzlesComponent } from './puzzles.component';
import { SharedModule } from '../shared/shared.module'


@NgModule({
  declarations: [PuzzlesComponent],
  imports: [
    CommonModule,
    PuzzlesRoutingModule,
    SharedModule
  ]
})
export class PuzzlesModule { }
