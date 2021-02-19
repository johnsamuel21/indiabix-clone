import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSuf1RoutingModule } from './data-suf1-routing.module';
import { Datasuf1PageComponent } from './datasuf1-page/datasuf1-page.component';


@NgModule({
  declarations: [Datasuf1PageComponent],
  imports: [
    CommonModule,
    DataSuf1RoutingModule
  ]
})
export class DataSuf1Module { }
