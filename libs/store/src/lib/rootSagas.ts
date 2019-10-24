/** @format */

// #region IMPORT
import { takeLatest } from 'redux-saga/effects';
import { TypeExtraArguments } from './types';
import { EChronologyActionTypes, ChronologyAction, sagas } from './chronology';

// #endregion

export const rootSagasChronology =  function* rootSagasChronology(
  extraArguments: TypeExtraArguments,
): any {
  // #region LISTENER :: GET_CHRONOLOGIES
  yield takeLatest(
    EChronologyActionTypes.GET_CHRONOLOGY,
    (action: ChronologyAction) => sagas(action, extraArguments),
  );

  // #endregion
}
