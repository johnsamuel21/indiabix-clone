import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { ServicesService } from '../../../../services/services.service'

@Component({
  selector: 'app-pagebar',
  templateUrl: './pagebar.component.html',
  styleUrls: ['./pagebar.component.css']
})
export class PagebarComponent implements OnInit {

  arr:any;

  @Output()
  clickevent = new EventEmitter<String>();

  functioncheck(val: any){
    this.clickevent.emit(val)
  }

 

  constructor(private _ServicesService: ServicesService) { }

  

  ngOnInit(): void {
    this.arr = this._ServicesService.getQuesforPages()[0].aptipage;
  }

}
