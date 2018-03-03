import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { EventState } from './../../../store/list/list.reducer';
import * as fromActions from '../../../store/list/list.action'
import * as listSelector from '../../../store/list/list.selector'

@Component({
  selector: 'app-listdata',
  templateUrl: './list-data.component.html',
  // styleUrls: ['./list-data.component.scss']
})
export class ListDataComponent implements OnInit {
  customerDetails$: Store<any[]>;
  events$: Store<any>;

  constructor(public store: Store<EventState>, private router: Router) {
    this.store.dispatch(new fromActions.FetchEvents());
    this.events$ = this.store.select(state => state.events);
  }

  ngOnInit() {
    // fetch data
    this.customerDetails$ = this.store.select(listSelector.getAllCustomer);
  }
}
