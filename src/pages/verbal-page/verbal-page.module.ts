import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VerbalPageRoutingModule } from './verbal-page-routing.module';
import { VerbalPageComponent } from './verbal-page.component';
import { HomePageModule } from '../home-page/home-page.module';
import { SharedModule } from '../shared/shared.module';
import { VerbalFrameComponent } from './verbal-frame/verbal-frame.component'


@NgModule({
  declarations: [VerbalPageComponent, VerbalFrameComponent],
  imports: [
    CommonModule,
    VerbalPageRoutingModule,
    HomePageModule,
    SharedModule
  ]
})
export class VerbalPageModule { }
