import {adaptDate} from './date';
import {Currency} from '../const';

const RUB_START_RATE = 1;
const FIX = 4;
const URL_ROUT = 'daily_json.js';

export const BACKEND_URL = 'https://www.cbr-xml-daily.ru';

export const adaptUrl = (date) => (
  date === adaptDate(new Date())
    ? `${BACKEND_URL}/${URL_ROUT}`
    : `${BACKEND_URL}/archive/${date}/${URL_ROUT}`
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
