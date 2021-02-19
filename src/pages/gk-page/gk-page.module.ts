import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GkPageRoutingModule } from './gk-page-routing.module';
import { GkComponent } from './gk.component';
import { SharedModule } from '../shared/shared.module';
import { GkFrameComponent } from './gk-frame/gk-frame.component'


@NgModule({
  declarations: [GkComponent, GkFrameComponent],
  imports: [
    CommonModule,
    GkPageRoutingModule,
    SharedModule
  ]
})
export class GkPageModule { }
