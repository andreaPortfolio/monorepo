/** @format */

import { combineReducers, Reducer } from 'redux';
import { ChronologyReducer, ChronologyState } from './chronology';

export interface ApplicationState {
  chronology: ChronologyState;
}

export interface MainState {
  chronologyReducer: ApplicationState;
}

export const rootReducer: Reducer<ApplicationState> = combineReducers<
  ApplicationState
>({ chronology: ChronologyReducer });

export default rootReducer;
