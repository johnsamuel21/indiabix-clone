import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InterviewRoutingModule } from './interview-routing.module';
import { InterviewComponent } from './interview.component';
import { SharedModule } from '../shared/shared.module';
import { InterviewFrameComponent } from './interview-frame/interview-frame.component';


@NgModule({
  declarations: [InterviewComponent, InterviewFrameComponent],
  imports: [
    CommonModule,
    InterviewRoutingModule,
    SharedModule
  ]
})
export class InterviewModule { }
