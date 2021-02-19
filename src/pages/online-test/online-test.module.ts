import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnlineTestRoutingModule } from './online-test-routing.module';
import { OnlineTestComponent } from './online-test.component';
import { SharedModule } from '../shared/shared.module';
import { OnlineTestFrameComponent } from './online-test-frame/online-test-frame.component'


@NgModule({
  declarations: [OnlineTestComponent, OnlineTestFrameComponent],
  imports: [
    CommonModule,
    OnlineTestRoutingModule,
    SharedModule
  ]
})
export class OnlineTestModule { }
