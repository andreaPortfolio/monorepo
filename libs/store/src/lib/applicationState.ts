import { combineReducers } from 'redux';
import { History } from 'history';

import { connectRouter, RouterState } from 'connected-react-router';
import {ChronologyReducer, ChronologyState } from './chronology';

export interface State {

  router: RouterState,
  chronology: ChronologyState

}

export const rootReducer = (history: History)=> combineReducers<State>({
  router: connectRouter(history),
  chronology: ChronologyReducer,
});
