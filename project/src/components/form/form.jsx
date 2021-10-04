import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {updateHistory} from '../../store/action';
import styles from './form.module.scss';
import ExchangerField from '../converter-field/converter-field';
import CalendarField from '../calendar-field/calendar-field';
import Button from '../button/button';
import LoadingScreen from '../loading-screen/loading-screen';
import {Currency} from '../../const';
import {getCalculationResult} from '../../utils/common';
import {getRates, getHistory, getDate, getIsRatesDataLoaded} from '../../store/selectors';

const MAX_HISTORY_COUNT = 10;

const InputType = {
  SELL: {
    label: 'У меня есть',
    type: 'sell',
  },
  BUY: {
    label: 'Хочу приобрести',
    type: 'buy',
  },
};

let ID = 1;

export default function Form() {
  const dispatch = useDispatch();
  const rates = useSelector(getRates);
  const history = useSelector(getHistory);
  const date = useSelector(getDate);
  const isLoad = useSelector(getIsRatesDataLoaded);

  const [sellValue, setSellValue] = useState(0);
  const [buyValue, setBuyValue] = useState(0);
  const [sellCurrency, setSellCurrency] = useState(Currency.RUB);
  const [buyCurrency, setBuyCurrency] = useState(Currency.USD);

  useEffect(() => {
    setBuyValue(getCalculationResult(
      sellValue,
      rates[sellCurrency],
      rates[buyCurrency]
    ));
  }, [rates, sellValue, sellCurrency, buyCurrency]);

  if (!isLoad) {
    return <LoadingScreen/>;
  }

  const handleBtnClick = (evt) => {
    evt.preventDefault();

    const historyList = history.slice();

    if (history.length >= MAX_HISTORY_COUNT) {
      historyList.shift();
    }

    dispatch(updateHistory([...historyList,
      {
        id: ID++,
        date,
        sellValue,
        sellCurrency,
        buyValue,
        buyCurrency,
      },
    ]));
  };

  const handleSelectChange = (evt, type) => {
    const value = evt.target.value;

    switch (type) {
      case InputType.SELL.type:
        setSellCurrency(value);
        setBuyValue(getCalculationResult(
          sellValue,
          rates[value],
          rates[buyCurrency]
        ));
        break;
      case InputType.BUY.type:
        setBuyCurrency(value);
        setBuyValue(getCalculationResult(
          sellValue,
          rates[sellCurrency],
          rates[value]
        ));
        break;
      default:
        break;
    }
  };

  const handleInputChange = (evt, type) => {
    const value = evt.target.value.replace(/^0+/, '');

    if (isNaN(value)) {
      return;
    }

    switch (type) {
      case InputType.SELL.type:
        setSellValue(value);
        setBuyValue(getCalculationResult(
          value,
          rates[sellCurrency],
          rates[buyCurrency]
        ));
        break;
      case InputType.BUY.type:
        setBuyValue(value);
        setSellValue(getCalculationResult(
          value,
          rates[buyCurrency],
          rates[sellCurrency]
        ));
        break;
      default:
        break;
    }
  };

  if (!isLoad) {
    return <LoadingScreen/>;
  }

  return (
    <form className={styles.form}>
      <ExchangerField
        type={InputType.SELL.type}
        label={InputType.SELL.label}
        value={sellValue}
        onSelectChange={handleSelectChange}
        onInputChange={handleInputChange}
        currentCurrency={sellCurrency}
      />
      <ExchangerField
        type={InputType.BUY.type}
        label={InputType.BUY.label}
        value={buyValue}
        onSelectChange={handleSelectChange}
        onInputChange={handleInputChange}
        currentCurrency={buyCurrency}
      />
      <CalendarField/>
      <Button
        type={'submit'}
        text='Сохранить результат'
        onClick={handleBtnClick}
        isBig
        isDisabled={sellValue === 0 || sellValue === ''}
      />
    </form>
  );
}
