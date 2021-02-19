import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../../../services/services.service'

@Component({
  selector: 'app-train-body',
  templateUrl: './train-body.component.html',
  styleUrls: ['./train-body.component.css']
})
export class TrainBodyComponent implements OnInit {

  
  arrayele: any;

  constructor(private _ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.arrayele = this._ServicesService.getLinkforPages()[0].aptipage;
  }

}
