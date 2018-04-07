import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { FirebaseListObservable } from 'angularfire2/database-deprecated';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { map, catchError } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { Employee } from './list.model';
import { Reference } from '@firebase/database';

@Injectable()
export class ListService {
  data_res: any;
  employeeList: AngularFireList<any>;
  selectedEmployee: Employee = new Employee();
  constructor(private db: AngularFireDatabase, private http: HttpClient, public _http: Http) {
    this.employeeList = this.db.list('list');
  }

  getData() {
    this.employeeList = this.db.list('list');
    return this.employeeList;
  }
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
          this.data_res = result;
          return this.data_res;
          // console.log('data from firebase', result)
        }),
        catchError((error: any) => Observable.throw(error.json()))
      );
  }

  insertEmployee(employee: Employee) {
    this.employeeList
      .push({
        name: employee.name,
        position: employee.position,
        office: employee.office,
        salary: employee.salary,
        img: employee.avatar,
        location: employee.location,
        description: employee.description
      })
      .then(data => {
        data.update({ _id: data.key });
      });
  }

  updateEmployee(employee: Employee) {
    this.employeeList.update(employee.$key, {
      name: employee.name,
      position: employee.position,
      office: employee.office,
      salary: employee.salary,
      img: employee.avatar,
      location: employee.location,
      description: employee.description
    });
  }

  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}
