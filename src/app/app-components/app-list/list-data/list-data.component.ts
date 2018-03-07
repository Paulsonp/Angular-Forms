import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { EventState } from './../../../store/list/list.reducer';
import * as fromActions from '../../../store/list/list.action'
import * as listSelector from '../../../store/list/list.selector'


import { map, catchError } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-listdata',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  coursesObservable$: Store<any[]>;
  events$: Store<any>;
  // coursesObservable: Observable<any[]>;

  constructor(public store: Store<EventState>, private router: Router, private db: AngularFireDatabase,) {
    this.store.dispatch(new fromActions.FetchEvents());
    this.events$ = this.store.select(state => state.events);

    // this.coursesObservable = this.getCourses('/list').map(snapshot => {
    //   const result = snapshot.map(data => {
    //     return {
    //       ...data.payload.val()
    //     };
    //   });
    //   return result;
    // })
    
    //   console.log('data from firebase', this.coursesObservable)
  }

  ngOnInit() {
    // fetch data
    this.coursesObservable$ = this.store.select(listSelector.getAllCustomer);
  }

  // getCourses(listPath): Observable<any[]> {
  //   return this.db.list(listPath).snapshotChanges();
  // }

  // getBookings(waitlistId) {
  //   return this.db
  //     .list(`/appointments/${waitlistId}`)
  //     .snapshotChanges()
  //     .pipe(
  //       map(snapshot => {
  //         const result = snapshot.map(data => {
  //           return {
  //             ...data.payload.val()
  //           };
  //         });
  //         return result;
  //       }),
  //       catchError((error: any) => Observable.throw(error.json()))
  //     );
  // }
}
