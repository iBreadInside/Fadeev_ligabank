import {createReducer} from '@reduxjs/toolkit';
import {loadRates, setDate, updateHistory, clearHistory} from './actions';

const initialState = {
  rates: {
    RUB: 1,
    USD: 1,
    EUR: 1,
    GBP: 1,
    CNY: 1,
  },
  history: [],
  date: new Date(),
  isRatesDataLoaded: false,
};

export const reducer = createReducer(
  initialState,
  (builder) => {
    builder
      .addCase(loadRates, (state, action) => {
        state.rates = action.payload;
        state.isRatesDataLoaded = true;
      })
      .addCase(setDate, (state, action) => {
        state.date = action.payload;
      })
      .addCase(updateHistory, (state, action) => {
        state.history = action.payload;
      })
      .addCase(clearHistory, (state) => {
        state.history = [];
      });
});
