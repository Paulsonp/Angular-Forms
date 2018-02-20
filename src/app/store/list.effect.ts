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

import * as fromAction from '../store/list.action';
import * as fromServices from '../firebase.service';
import { Action, Store } from '@ngrx/store';

@Injectable()
export class ListEffects {
    constructor(private actions$: Actions,
        private service: fromServices.FirebaseService,
        public store: Store<any>) {}
        

    @Effect()
    fetchEvents$ = this.actions$.ofType(fromAction.FETCH_EVENTS)
    .pipe (
        switchMap((action: any) => {
            return this.service.getEvent().pipe(
                map( payload => {
                    console.log('DATA : ', payload);
                    // new fromAction.FetchEventsSuccess(payload);
                    this.store.dispatch({
                        type: fromAction.FETCH_EVENTS_SUCCESS,
                        payload: payload
                    })
                })
            );
        })
    );
}

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
