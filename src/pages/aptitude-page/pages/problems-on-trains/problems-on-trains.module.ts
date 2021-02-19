import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProblemsOnTrainsRoutingModule } from './problems-on-trains-routing.module';
import { TrainProblemPageComponent } from './train-problem-page.component';
import { TrainBodyComponent } from './train-body/train-body.component';
import {HomePageModule} from '../../../home-page/home-page.module'
import {SharedModule} from '../../../shared/shared.module';
import { TrainQuesComponent } from './train-ques/train-ques.component';
import { QuesPage2Component } from './ques-page2/ques-page2.component'

@NgModule({
  declarations: [TrainProblemPageComponent, TrainBodyComponent, TrainQuesComponent, QuesPage2Component],
  imports: [
    CommonModule,
    ProblemsOnTrainsRoutingModule,
    HomePageModule,
    SharedModule
  ]
})
export class ProblemsOnTrainsModule { }
