import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router'

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  constructor(private _Router: Router) { }

  searchFunc(){
    this._Router.navigateByUrl("www.google.com");
  }

  ngOnInit(): void {
  }

}
