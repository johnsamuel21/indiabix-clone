import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LogicalPageRoutingModule } from './logical-page-routing.module';
import { LogicalBodyComponent } from './logical-body.component';
import { SharedModule } from '../shared/shared.module';
import { LogicalFrameComponent } from './logical-frame/logical-frame.component'

@NgModule({
  declarations: [LogicalBodyComponent, LogicalFrameComponent],
  imports: [
    CommonModule,
    LogicalPageRoutingModule,
    SharedModule

  ]
})
export class LogicalPageModule { }
