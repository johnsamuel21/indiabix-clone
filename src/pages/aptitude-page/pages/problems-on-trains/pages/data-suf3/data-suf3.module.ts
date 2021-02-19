import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataSuf3RoutingModule } from './data-suf3-routing.module';
import { Datasuf3PageComponent } from './datasuf3-page/datasuf3-page.component';


@NgModule({
  declarations: [Datasuf3PageComponent],
  imports: [
    CommonModule,
    DataSuf3RoutingModule
  ]
})
export class DataSuf3Module { }
