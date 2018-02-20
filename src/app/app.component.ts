import { Component, OnInit } from '@angular/core';

import { Store } from '@ngrx/store';
import * as reducer from './store/list.reducer';
import * as fromActions from './store/list.action';
import { Observable } from 'rxjs/Observable';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events$: Store<any>;
  // events: Observable<any[]>;

  constructor (private store: Store<reducer.State>) {}

  ngOnInit() {
    this.store.dispatch(new fromActions.FetchEvents());
    // this.events$ = this.store.select(state => state.events);
    // console.log('iam component', this.events$)
  }
}
