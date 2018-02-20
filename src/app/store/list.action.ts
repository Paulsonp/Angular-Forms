import { Injectable } from '@angular/core';
import { Action, Store } from '@ngrx/store';
import { ListLoad } from './list.model';



export const FETCH_EVENTS = 'Fetch EVENTS';
export const FETCH_EVENTS_SUCCESS = 'Fetch EVENTS Success';


export class FetchEvents implements Action {
  readonly type = FETCH_EVENTS;
  constructor() { };
}
export class FetchEventsSuccess implements Action {
  readonly type = FETCH_EVENTS_SUCCESS;
  constructor(public payload: any) { };
}
export type Actions =
        | FetchEvents
        | FetchEventsSuccess;