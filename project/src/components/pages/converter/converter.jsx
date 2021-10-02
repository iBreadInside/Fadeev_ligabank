import React from 'react';
import Header from '../../ui/header/header';
import SectionBanner from '../../ui/sectionBanner/sectionBanner';

function ConverterPage() {
  return(
    <div className='app'>
      <Header />

      <main>
        <SectionBanner />

        <section className='converter-block'>
          <h2 className='converter__title'>Конвертер валют</h2>
          <div className='converter__fieled--have'>
            <textarea></textarea>
            <select></select>
          </div>
          <div className='converter__field--want'>
            <textarea></textarea>
            <select></select>
          </div>
        </section>

        <section className='converter__history'>
          <h2 className='converter__title converter__title--history'>История конвертации</h2>
          <div></div>
          <button className='converter__button converter__button--clear'>Очистить историю</button>
        </section>
      </main>

      <footer>
        <section className='footer-block'></section>
      </footer>
    </div>
  );
}

export default ConverterPage;
