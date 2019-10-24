/** @format */

import { Reducer } from 'redux';
import {
  EChronologyActionTypes,
  ChronologyState,
  ChronologyAction,
} from './types';
import { createReducer } from '../utils/helpers/reducerHelper';

const initialState: ChronologyState = {
  data: null,
  isLoaded: false,
  isLoading: false,
  errors: null,
};

const chronologyRequest = (
  state: ChronologyState,
  action: ChronologyAction,
) => ({
  ...state,
  ...action.payload,
});

const chronologySuccess = (
  state: ChronologyState,
  action: ChronologyAction,
) => ({
  ...state,
  ...action.payload,
});

const chronologyFailure = (
  state: ChronologyState,
  action: ChronologyAction,
) => ({
  ...state,
  ...action.payload,
});

const chronologyReducer: Reducer<ChronologyState> = createReducer(
  initialState,
  {
    [EChronologyActionTypes.GET_CHRONOLOGY_REQUEST]: chronologyRequest,
    [EChronologyActionTypes.GET_CHRONOLOGY_SUCCESS]: chronologySuccess,
    [EChronologyActionTypes.GET_CHRONOLOGY_FAILURE]: chronologyFailure,
  },
);

export { chronologyReducer as ChronologyReducer };
