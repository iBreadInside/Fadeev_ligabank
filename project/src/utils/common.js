import {adaptDate} from './date';
import {BACKEND_URL, URL_ROUT, Currency} from '../const';

const RUB_START_RATE = 1;

const adaptUrl = (date) => (
  date === adaptDate(new Date())
    ? `${BACKEND_URL}/${URL_ROUT}`
    : `${BACKEND_URL}/archive/${date}/${URL_ROUT}`
);

const adaptRates = ({Valute}) => ({
  [Currency.RUB]: RUB_START_RATE,
  [Currency.USD]: Valute.USD.Value,
  [Currency.EUR]: Valute.EUR.Value,
  [Currency.GBP]: Valute.GBP.Value,
  [Currency.CNY]: Valute.CNY.Value,
});

const FIX = 4;

const getCalculationResult = (value, sellValue, buyValue) => +(
  (value * sellValue / buyValue).toFixed(FIX)
);

export {adaptUrl, adaptRates, getCalculationResult};
