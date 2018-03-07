
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppService } from './store/app.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loading = false;
  constructor (public _appService: AppService) {
    this._appService.spinner.subscribe((obj) => {
      this.loading = obj;
    });
  }

  ngOnInit() {}
}
