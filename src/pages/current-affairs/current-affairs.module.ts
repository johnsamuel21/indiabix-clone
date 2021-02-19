import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module'

import { CurrentAffairsRoutingModule } from './current-affairs-routing.module';
import { CurrentAffairsComponent } from './current-affairs.component';
import { CurrentAffairsFrameComponent } from './current-affairs-frame/current-affairs-frame.component';


@NgModule({
  declarations: [CurrentAffairsComponent, CurrentAffairsFrameComponent],
  imports: [
    CommonModule,
    CurrentAffairsRoutingModule,
    SharedModule
  ]
})
export class CurrentAffairsModule { }
