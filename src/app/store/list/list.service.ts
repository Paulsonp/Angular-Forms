import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {FirebaseListObservable } from 'angularfire2/database-deprecated';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Http } from '@angular/http';

@Injectable()
export class ListService {
  items: any;
  event: FirebaseListObservable<any[]>;
    constructor(private db: AngularFireDatabase, private http: HttpClient, public _http: Http) {
      // this.items = this.db.list('/events');
      console.log('hai', this.items)
    }

    getEvent() {
      const data = this._http.get('assets/document.json')
        .map((res: any) => res.json());
      console.log(data);
      return data;
    }
}