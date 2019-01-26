import { combineReducers } from "redux";
import { memberReducer, memberState } from "./memberReducer";
import { memberFilterReducer, filterState } from "./memberFilterReducer";

export interface State {
  memberReducer: memberState;
  memberFilterReducer: filterState;
}

export const reducers = combineReducers<State>({
  memberReducer,
  memberFilterReducer
});
