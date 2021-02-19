import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSuf2RoutingModule } from './data-suf2-routing.module';
import { Datasuf2PageComponent } from './datasuf2-page/datasuf2-page.component';


@NgModule({
  declarations: [Datasuf2PageComponent],
  imports: [
    CommonModule,
    DataSuf2RoutingModule
  ]
})
export class DataSuf2Module { }
