import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../../../../../services/services.service'

@Component({
  selector: 'app-formula-body',
  templateUrl: './formula-body.component.html',
  styleUrls: ['./formula-body.component.css']
})
export class FormulaBodyComponent implements OnInit {

  arrayele: any;

  constructor(private _ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.arrayele = this._ServicesService.getLinkforPages()[0].aptipage;
  }

}
