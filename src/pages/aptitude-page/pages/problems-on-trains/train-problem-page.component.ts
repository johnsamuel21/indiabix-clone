import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-train-problem-page',
  templateUrl: './train-problem-page.component.html',
  styleUrls: ['./train-problem-page.component.css']
})
export class TrainProblemPageComponent implements OnInit {

  page0 : boolean = true;
  page1 : boolean = false;


  functioncheck($event:String){
    if($event=="0"){
      this.page1=false;
      this.page0=true;
    }
    else if($event=="1"){
      this.page1=true;
      this.page0=false;
    }
  }
  

  constructor(private _Router:Router) {
    
   }

  ngOnInit(): void {

   
  


  }

}
