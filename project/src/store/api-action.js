import {loadRates, setDate} from './actions';
import {adaptDate} from '../utils/date';
import {adaptUrl, adaptRates} from '../utils/common';
import {showAlert} from '../utils/toast';

const RESPONSE_OK = 200;
const MESSAGE = 'Что-то пошло не так. Возможно, курс ЦБ РФ на данную дату не установлен';

export const fetchRates = (date) => async (dispatch, _getState, api) => {
  try {
    const adaptedDate = adaptDate(date);
    const adaptedUrl = adaptUrl(adaptedDate);

    const response = await api.get(adaptedUrl);

    if (response.status === RESPONSE_OK) {
      const rates = adaptRates(response.data);
      dispatch(loadRates(rates));
      dispatch(setDate(response.data.Date));
    }
  } catch {
    showAlert(MESSAGE);
  }
}
