import React from 'react';
import {Provider} from 'react-redux';
import {reducer} from './store/reducer';
import {fetchRates} from './store/api-action';
import {configureStore} from '@reduxjs/toolkit';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import './sass/style.scss';

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddlware) => getDefaultMiddlware({
    serializableCheck: false,
  }),
});

store.dispatch(fetchRates());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.querySelector('#root')
);
