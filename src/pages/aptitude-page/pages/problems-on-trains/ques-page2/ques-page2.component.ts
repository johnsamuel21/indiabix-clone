import { Component, OnInit } from '@angular/core';
import {ServicesService} from '../../../../../services/services.service'

@Component({
  selector: 'app-ques-page2',
  templateUrl: './ques-page2.component.html',
  styleUrls: ['./ques-page2.component.css']
})
export class QuesPage2Component implements OnInit {

  arrayele: any;

  constructor(private _ServicesService: ServicesService) { }

  ngOnInit(): void {
    this.arrayele = this._ServicesService.getQuesforPages()[0].aptipage[1].page1;
  }

}
