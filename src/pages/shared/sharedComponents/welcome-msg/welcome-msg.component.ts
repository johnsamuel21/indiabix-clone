import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-msg',
  templateUrl: './welcome-msg.component.html',
  styleUrls: ['./welcome-msg.component.css']
})
export class WelcomeMsgComponent implements OnInit {

  @Input()
  welcomeMsg: String = "Welcome to IndiaBIX.com !";

  

  constructor() { }

  ngOnInit(): void {
  }

}
