import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-welcome-final-text',
  templateUrl: './welcome-final-text.component.html',
  styleUrls: ['./welcome-final-text.component.css']
})
export class WelcomeFinalTextComponent implements OnInit {

  @Input()
  welcometext: String = "List of Topics";

  constructor() { }

  ngOnInit(): void {
  }

}
