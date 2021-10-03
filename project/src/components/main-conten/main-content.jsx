import React from 'react';
import History from '../history/history';
import Banner from '../banner/banner';
import Converter from '../converter/converter';

export default function MainContent() {
  return (
    <main>
      <h1 className="visually-hidden">Лига Банк - Конвертер валют</h1>
      <Banner />
      <Converter/>
      <History/>
    </main>
  );
}
