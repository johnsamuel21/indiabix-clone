import { Component, OnInit,Input } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-aptitude-body',
  templateUrl: './aptitude-body.component.html',
  styleUrls: ['./aptitude-body.component.css']
})
export class AptitudeBodyComponent implements OnInit {


  constructor(private _Router:Router) {

   }

  ngOnInit(): void {
    
  }

}
