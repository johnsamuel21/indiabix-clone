import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EngineeringRoutingModule } from './engineering-routing.module';
import { EngineeringComponent } from './engineering.component';
import { EngineeringFrameComponent } from './engineering-frame/engineering-frame.component';
import { SharedModule } from '../shared/shared.module'

@NgModule({
  declarations: [EngineeringComponent, EngineeringFrameComponent],
  imports: [
    CommonModule,
    EngineeringRoutingModule,
    SharedModule
  ]
})
export class EngineeringModule { }
