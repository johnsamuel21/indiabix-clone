import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../../../services/services.service'

@Component({
  selector: 'app-train-ques',
  templateUrl: './train-ques.component.html',
  styleUrls: ['./train-ques.component.css']
})
export class TrainQuesComponent implements OnInit {

  arrayele: any;

  constructor(private _ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.arrayele = this._ServicesService.getQuesforPages()[0].aptipage[0].page0;
  }

}
