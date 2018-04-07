import { ToastrService } from 'ngx-toastr';
import { AngularFireDatabase } from 'angularfire2/database';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { EventState } from './../../../store/list/list.reducer';
import * as fromActions from '../../../store/list/list.action';
import * as listSelector from '../../../store/list/list.selector';

import { map, catchError } from 'rxjs/operators';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';
import { MatDialogRef, MatDialog } from '@angular/material';

import { AddListComponent } from '../list-add/list-add.component';
import { ListService } from '../../../store/list/list.service';
import { Employee } from '../../../store/list/list.model';
import { AppService } from '../../../store/app.service';
@Component({
  selector: 'app-listdata',
  templateUrl: './list-data.component.html',
  styleUrls: ['./list-data.component.css']
})
export class ListDataComponent implements OnInit {
  hideDetails: 'Welcome Page';
  coursesObservable$: Store<any[]>;
  events$: Store<any>;
  employeeList: Employee[];
  fileNameDialogRef: MatDialogRef<AddListComponent>;
  // coursesObservable: Observable<any[]>;

  constructor(
    public store: Store<EventState>,
    private router: Router,
    private db: AngularFireDatabase,
    private dialog: MatDialog,
    private employeeService: ListService,
    private tostr: ToastrService,
    public _appService: AppService
  ) {
    this.store.dispatch(new fromActions.FetchEvents());
    // this.events$ = this.store.select(state => state.events);
    this._appService.title.emit('EMPLOYEESS LIST');
  }

  ngOnInit() {
    // var x = this.employeeService.getData();
    // x.snapshotChanges().subscribe(item => {
    //   this.employeeList = [];
    //   item.forEach(element => {
    //     var y = element.payload.toJSON();
    //     y['$key'] = element.key;
    //     this.employeeList.push(y as Employee);
    //   });
    //   console.log('data employee:', this.employeeList);
    // });

    // fetch data
    this.coursesObservable$ = this.store.select(listSelector.getAllCustomer);
  }

  onEdit(emp: Employee) {
    this.employeeService.selectedEmployee = Object.assign({}, emp);
    this.fileNameDialogRef = this.dialog.open(AddListComponent);
  }

  onDelete(_id) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id);
      this.tostr.warning('Deleted Successfully', 'Employee register');
    }
  }

  openAddFileDialog() {
    this.fileNameDialogRef = this.dialog.open(AddListComponent, {
      width: '400px'
    });
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
