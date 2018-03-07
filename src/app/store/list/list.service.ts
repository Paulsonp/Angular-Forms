import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database-deprecated';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class ListService {
  items: any;
  event: FirebaseListObservable<any[]>;
  coursesObservable: Observable<any[]>;
    constructor(private db: AngularFireDatabase, private http: HttpClient, public _http: Http) {

    }

    // getEvent() {
    //   const data = this._http.get('assets/document.json')
    //     .map((res: any) => res.json());
    //   console.log(data);
    //   return data;
    // }
    getEvent() {
      return this.db
        .list(`/list`)
        .snapshotChanges()
        .pipe(
          map(snapshot => {
            const result = snapshot.map(data => {
              return {
                ...data.payload.val()
              };
            });
            return result;
  
      
        console.log('data from firebase', result)
          }),
          catchError((error: any) => Observable.throw(error.json()))
        );
    }

}