import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AptitudePageRoutingModule } from './aptitude-page-routing.module';
import { AptitudeBodyComponent } from './aptitude-body.component';
import { SharedModule } from '../shared/shared.module';
import {AptitudeFrameComponent} from './aptitude-frame/aptitude-frame.component';
import { AptitudeContentComponent } from './aptitude-content/aptitude-content.component'

@NgModule({
  declarations: [AptitudeBodyComponent,AptitudeFrameComponent, AptitudeContentComponent],
  imports: [
    CommonModule,
    AptitudePageRoutingModule,
    SharedModule
  ]
})
export class AptitudePageModule { }
