
import { ActionReducerMap, createSelector, createFeatureSelector } from '@ngrx/store';
import { EventState } from './list.reducer';


// current reducer
export const listCustomerState = createFeatureSelector<EventState>('ListReducer');

// list data object
export const getCustomerData = createSelector(listCustomerState , (state: EventState) => {
    return state.entities;
});

// list data  array
export const getAllCustomer = createSelector(listCustomerState, entities => {
    return Object.keys(entities.entities).map(id => entities.entities[id]);
});

// list data object
export const getCustomerList = createSelector(listCustomerState , (state: EventState) => {
    return state.events;
});
