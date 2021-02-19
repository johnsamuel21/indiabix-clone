import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomeBaseComponent } from './home-base.component';
import { SharedModule } from '../shared/shared.module';
import { MainbodyComponent } from './mainbody/mainbody.component';


@NgModule({
  declarations: [HomeBaseComponent,
    MainbodyComponent],
  imports: [
    CommonModule,
    HomePageRoutingModule,
    SharedModule
  ]

})
export class HomePageModule { }
