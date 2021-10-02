import React from 'react';
import Header from '../../ui/header/header';
import Banner from '../../ui/banner/banner';
import ConverterBlock from '../../ui/converterBlock/converterBlock';
import Footer from '../../ui/footer/footer';

function ConverterPage() {
  return(
    <div className='app'>
      <Header />

      <main>
        <Banner />
        <ConverterBlock />

        <section className='converter__history'>
          <h2 className='converter__title converter__title--history'>История конвертации</h2>
          <div></div>
          <button className='converter__button converter__button--clear'>Очистить историю</button>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default ConverterPage;
