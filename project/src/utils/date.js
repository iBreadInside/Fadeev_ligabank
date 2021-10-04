import dayjs from 'dayjs';
import {DateType} from '../const';

const MAX_DATE_RANGE = 7;

export const getMinDate = (date) => dayjs(date).subtract(MAX_DATE_RANGE, 'day').toDate();

export const adaptDate = (date, dateType = DateType.SERVER) => {
  switch (dateType) {
    case DateType.SERVER:
      return dayjs(date).format('YYYY/MM/DD');
    case DateType.HISTORY:
      return dayjs(date).format('DD.MM.YYYY');
    default:
      return date;
  }
};
