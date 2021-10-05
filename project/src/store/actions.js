import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_RATES: 'converter/loadRates',
  SET_DATE: 'converter/setDate',
  UPDATE_HISTORY: 'history/updateHistory',
  CLEAR_HISTORY: 'history/clearHistory',
};

export const loadRates = createAction(
  ActionType.LOAD_RATES,
  (rates) => ({
    payload: rates,
  })
);

export const setDate = createAction(
  ActionType.SET_DATE,
  (date) => ({
    payload: date,
  })
);

export const updateHistory = createAction(
  ActionType.UPDATE_HISTORY,
  (currentHistory) => ({
    payload: currentHistory,
  })
);

export const clearHistory = createAction(
  ActionType.CLEAR_HISTORY,
);
