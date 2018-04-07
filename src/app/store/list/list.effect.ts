import { Observable } from 'rxjs/Observable';
// @Effect()
// FetchEvents$: Observable<Action> = this.actions$.ofType(actions.FETCH_EVENTS) // filtering actions
// .switchMap(() => this.firebaseService.items
// .do((payload) => new actions.FetchEventsSuccess(payload))
// );
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';

import { Effect, Actions } from '@ngrx/effects';
import { switchMap, map, catchError } from 'rxjs/operators';
import { Action, Store } from '@ngrx/store';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switchMap';

import { AppService } from '../app.service';
import * as fromAction from './list.action';
import * as fromServices from './list.service';

@Injectable()
export class ListEffects {
  constructor(
    private actions: Actions,
    private service: fromServices.ListService,
    public store: Store<any>,
    public _appService: AppService
  ) {}

  @Effect()
  public fetchEvents$: Observable<Action> = this.actions.ofType(fromAction.FETCH_EVENTS).pipe(
    switchMap((action: fromAction.FetchEvents) => {
      this._appService.spinner.emit(true);
      return this.service.getEvent().pipe(
        map((action: any) => {
          this._appService.spinner.emit(false);
          console.log('DATA : ', action);
          // if (action.error === false) {
          return new fromAction.FetchEventsSuccess(action);
          // } else {
          //     return new fromAction.FetchEventsFail(action);
          // }
        })
      );
    }),
    catchError(err => of(new fromAction.FetchEventsFail(err))) // dispatch fail state
  );
  @Effect()
  public addEmployee$: Observable<Action> = this.actions.ofType(fromAction.FETCH_ADD_EVENTS).pipe(
    switchMap((action: fromAction.FetchEvents) => {
      this._appService.spinner.emit(true);
      return this.service.getEvent().pipe(
        map((action: any) => {
          this._appService.spinner.emit(false);
          console.log('DATA : ', action);
          // if (action.error === false) {
          return new fromAction.FetchAddEventsSuccess(action);
          // } else {
          //     return new fromAction.FetchEventsFail(action);
          // }
        })
      );
    }),
    catchError(err => of(new fromAction.FetchEventsFail(err))) // dispatch fail state
  );
}

// public fetchEvents$: Observable<Action> = this.actions
//     .ofType(fromAction.FETCH_EVENTS)
//     .switchMap((action: any) =>
//         this.service.getEvent()
//         .switchMap((res: any) => {
//             console.log('DATA : ', res);
//             // if (res.error === false) {
//                 return Observable.of(new fromAction.FetchEventsSuccess(res)); // Dispatch success state
//             // }
//         }),
//         catchError(err => of(new fromAction.FetchEventsFail(err))) // dispatch fail state
//         );
// }

// @Effect()
//     addUser$ = this._action$.ofType(fromActions.ADD_USER).pipe(
//         switchMap((action: fromActions.AddUserAction) => {
//             return this._userService.addUser(action.payload).pipe(
//                     map((response) => {
//                         if (response.error === false) {
//                             this._appService.errorData.emit('User added Successfully');
//                             return new fromActions.AddUserActionSuccess(action.payload);
//                         } else {
//                             this._appService.errorData.emit('Something went wrong, please try again!');
//                             return new fromActions.AddUserActionError(response);
//                         }
//                     }),
//                     catchError(err => of(new fromActions.AddUserActionError(err)))
//             );
//         })
//     );
