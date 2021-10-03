import dayjs from 'dayjs';
import {MAX_DATE_RANGE, DateType} from '../const';

const getMinDate = (date) => dayjs(date).subtract(MAX_DATE_RANGE, 'day').toDate();

const adaptDate = (date, dateType = DateType.SERVER) => {
  switch (dateType) {
    case DateType.SERVER:
      return dayjs(date).format('YYYY/MM/DD');
    case DateType.HISTORY:
      return dayjs(date).format('DD.MM.YYYY');
    default:
      return date;
  }
};

export {getMinDate, adaptDate};
