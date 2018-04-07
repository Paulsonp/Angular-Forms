import { Component, OnInit } from '@angular/core';

import { AppService } from '../store/app.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent implements OnInit {
  hideDetails: 'Welcome Page';
  constructor(public _appService: AppService) {
    this._appService.title.subscribe(obj => {
      this.hideDetails = obj;
    });
  }

  ngOnInit() {}
}
