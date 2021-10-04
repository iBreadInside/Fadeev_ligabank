import {createAction} from '@reduxjs/toolkit';

export const ActionType = {
  LOAD_RATES: 'exchanger/loadRates',
  SET_DATE: 'exchanger/setDate',
  UPDATE_HISTORY: 'history/updateHistory',
  CLEAR_HISTORY: 'history/clearHistory',
};

export const loadRates = createAction(
  ActionType.LOAD_RATES,
  (payload) => ({
    payload,
  })
);

export const setDate = createAction(
  ActionType.SET_DATE,
  (payload) => ({
    payload,
  })
);

export const updateHistory = createAction(
  ActionType.UPDATE_HISTORY,
  (payload) => ({
    payload,
  })
);

export const clearHistory = createAction(
  ActionType.CLEAR_HISTORY,
  (payload) => ({
    payload,
  })
);
