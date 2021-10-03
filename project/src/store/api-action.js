import axios from 'axios';
import {loadRates, setDate} from './action';
import {adaptDate} from '../utils/date';
import {adaptUrl, adaptRates} from '../utils/common';
import {showAlert} from '../utils/toast';

export const fetchRates = (date) => (dispatch, _getState) => {
  const adaptedDate = adaptDate(date);
  const adaptedUrl = adaptUrl(adaptedDate);

  return axios
    .get(adaptedUrl)
    .then(({data}) => {
      const adaptedRates = adaptRates(data);
      dispatch(loadRates(adaptedRates));
      dispatch(setDate(data.Date));
    })
    .catch(() => {
      showAlert();
    });
};
