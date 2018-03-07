import * as EventActions from './list.action';
import { ListLoad } from './list.model';
// Define state
export interface EventState {
  entities: { [id: number]: ListLoad };
  loading: boolean; // indicates loading while fetching data
  events: any;
}
// Define initial state
const initialState: EventState = {
  entities: { },
  loading: false,
  events: []
};
// reducer function
export function listReducer( state = initialState,
                         action: EventActions.Actions ): EventState {
   switch (action.type) {
     case EventActions.FETCH_EVENTS: {
       return {
         ...state,
         loading: true
        }
      }
     case EventActions.FETCH_EVENTS_SUCCESS: {
      const events = action.payload;
      console.log("hai", action.payload )
      const entities = events.reduce(
          // tslint:disable-next-line:no-shadowed-variable
          (entities: { [id: number]: ListLoad }, event: ListLoad) => {
              return {
                  ...entities,
                  [event._id]: event,
              };
          },
          {
              ...state.entities,
          }
      );
      return {
          ...state,
          loading: false,
          entities,
          events: action.payload
      };
     }
     case EventActions.FETCH_EVENTS_FAIL: {
      return {
        ...state,
        loading: false
       }
     }
     default: {
      return state
     }
  }
}