/** @format */

import {
  EChronologyActionTypes,
  ChronologyAction,
  ChronologyState,
  ChronologyParams,
} from './types';

export const actionGetChronology = (
  params: ChronologyParams,
): ChronologyAction => ({
  type: EChronologyActionTypes.GET_CHRONOLOGY,
  params,
});

export const actionGetChronologyRequest = (
  payload: ChronologyState,
): ChronologyAction => ({
  type: EChronologyActionTypes.GET_CHRONOLOGY_REQUEST,
  payload,
});

export const actionGetChronologySuccess = (
  payload: ChronologyState,
): ChronologyAction => ({
  type: EChronologyActionTypes.GET_CHRONOLOGY_SUCCESS,
  payload,
});

export const actionGetChronologyFailure = (
  payload: ChronologyState,
): ChronologyAction => ({
  type: EChronologyActionTypes.GET_CHRONOLOGY_FAILURE,
  payload,
});
