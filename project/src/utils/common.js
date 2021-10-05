import {adaptDate} from './date';
import {Currency} from '../const';

const RUB_START_RATE = 1;
const FIX = 4;
const URL_ROUT = 'daily_json.js';

export const adaptUrl = (date) => (
  date === adaptDate(new Date())
    ? `/${URL_ROUT}`
    : `/archive/${date}/${URL_ROUT}`
);

export const adaptRates = ({Valute}) => ({
  [Currency.RUB]: RUB_START_RATE,
  [Currency.USD]: Valute.USD.Value,
  [Currency.EUR]: Valute.EUR.Value,
  [Currency.GBP]: Valute.GBP.Value,
  [Currency.CNY]: Valute.CNY.Value,
});


export const getCalculationResult = (value, sellValue, buyValue) => +(
  (value * sellValue / buyValue).toFixed(FIX)
);
