import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-inner-link',
  templateUrl: './inner-link.component.html',
  styleUrls: ['./inner-link.component.css']
})
export class InnerLinkComponent implements OnInit {

  @Input()
  linkarray: any;

  @Input()
  heading: String="";

  valuearray: any;


  constructor() { }

  ngOnInit(): void {
    this.valuearray = this.linkarray.value;
    // this.heading = this.linkarray.heading;

  }

}
