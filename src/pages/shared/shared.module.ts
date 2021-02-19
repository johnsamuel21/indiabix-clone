import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeMsgComponent } from './sharedComponents/welcome-msg/welcome-msg.component';
import { WelcomeLinkComponent } from './sharedComponents/welcome-link/welcome-link.component';
import { WelcomeFinalTextComponent } from './sharedComponents/welcome-final-text/welcome-final-text.component';
import { FooterComponent } from './sharedComponents/footer/footer.component';
import { LogoComponent } from './sharedComponents/logo/logo.component';
import { MenuBarComponent } from './sharedComponents/menu-bar/menu-bar.component'
import { SearchBarComponent } from './sharedComponents/search-bar/search-bar.component';
import { InnerLinkComponent } from './sharedComponents/inner-link/inner-link.component';
import { QuestionBlockComponent } from './sharedComponents/question-block/question-block.component';
import {MatButtonModule} from '@angular/material/button';
import { PagebarComponent } from './sharedComponents/pagebar/pagebar.component';




@NgModule({
  declarations: [WelcomeMsgComponent,
     WelcomeLinkComponent, 
     WelcomeFinalTextComponent,
     FooterComponent,
     LogoComponent,
     MenuBarComponent,
     SearchBarComponent, 
     InnerLinkComponent, 
     QuestionBlockComponent, PagebarComponent],
  imports: [
    CommonModule,
    MatButtonModule
  ],
  exports:[
    WelcomeMsgComponent,
    WelcomeLinkComponent,
    WelcomeFinalTextComponent,
    FooterComponent,
    LogoComponent,
    MenuBarComponent,
    SearchBarComponent,
    InnerLinkComponent,
    QuestionBlockComponent,
    PagebarComponent
  ]
})
export class SharedModule { }
