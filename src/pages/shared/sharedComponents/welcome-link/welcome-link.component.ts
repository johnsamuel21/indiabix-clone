import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';

import {Router} from '@angular/router'
@Component({
  selector: 'app-welcome-link',
  templateUrl: './welcome-link.component.html',
  styleUrls: ['./welcome-link.component.css']
})
export class WelcomeLinkComponent implements OnInit {

  checkfortext: Boolean = false;
  checkforlink: Boolean = false;

  @Input()
  content: String = "Home   »   ";

  @Input()
  linktab: String = "";

  @Output()
  linkortext = new EventEmitter();

  constructor(private _Router:Router) { }

  currenturlas = this._Router.url.split('/');


  checkUser(){
    if(this.currenturlas[1].length<1){
      this.checkfortext = true;
    }else{
      this.checkforlink = true;
    }
  }

  ngOnInit(): void {

    this.checkUser()
  }

}
