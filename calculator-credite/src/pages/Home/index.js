// # Core
import React from 'react';


const Home = () => (
  <div>
    <h1>Задача</h1>
    <h2>Реализовать кредитный калькулятор</h2>
    <p>Используйзте технологии:</p>
    <ul>
      <li>react;</li>
      <li>react-router;</li>
      <li>react-redux.</li>
    </ul>
    <p>Калькулятор должен содержать набор элементов для подбора нужных параметров кредита:</p>
    <ul>
      <li>валюта;</li>
      <li>Cумма;</li>
      <li>срок.</li>
    </ul>
    <hr />
    <p>При изменении параметров нужно производить поиск соответствующей ставки по кредиту и производить расчет:</p>
    <ul>
      <li>ежемесячного платежа;</li>
      <li>общей переплаты;</li>
    </ul>
    <hr />
    <p>Данные для расчетов должны загружаться асинхронно из json файла который должен лежать в папке с проектом.
      <br />Файл json содержит массив ставок по кредитам, с полями:</p>
    <ul>
      <li>ставка в процентах годовых;</li>
      <li>минимальная сумма кредита для этой ставки;</li>
      <li>максимальна сумма кредита для этой ставки;</li>
      <li>минимальный срок для ставки;</li>
      <li>максимальный срок для ставки;</li>
      <li>валюта кредита (гривны, доллары).</li>
    </ul>
    <hr />
    <p>Под кредитным калькулятором нужно отобразить таблицу ставок, в которую вывести таблицу со всеми ставками в виде:</p>
    <table className="table">
      <thead>
        <tr>
          <th>Размер ставки</th>
          <th>Валюта</th>
          <th>Сума от, до</th>
          <th>Срок от, до</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>2.5</td>
          <td>Доллары</td>
          <td>10 — 20 тыс</td>
          <td>6 мес. - 2 лет</td>
        </tr>
      </tbody>
    </table>
    <hr />
    <p><strong>Формулы для расчета:</strong></p>
    <p><strong>СТАВКА</strong> = процент годовых;</p>
    <p><strong>СРОК</strong> = срок в месяцах на сколько берем кредит;</p>
    <p><strong>КОЕФ</strong> = (СТАВКА / 100 / 12);</p>
    <p><strong>ПОЛНАЯ_СУММА_К_ВЫПЛАТЕ</strong> = СУММА * КОЕФ * POW((1 + КОЕФ), СРОК) / (POW((1 + КОЕФ), СРОК) — 1) * СРОК;</p>
    <p><strong>ЕЖЕМЕСЯЧНЫЙ_ПЛАТЕЖ</strong> = ПОЛНАЯ_СУММА_К_ВЫПЛАТЕ / СРОК;</p>
    <p><strong>ПЕРЕПЛАТА</strong> = ПОЛНАЯ_СУММА_К_ВЫПЛАТЕ — СУММА;</p>
    <hr />
    <h3>Примечания</h3>
    <ul>
      <li>при загрузке данных необходимо отобразить лоадер;</li>
      <li>все параметры должны сохраняться и быть выбраны после перезагрузки страницы;</li>
      <li>
        под формой добавить кнопку оформить при нажатии на которую будет происходить переход на другую страницу на
        которой нужно отобразить параметры и результат расчетов.
      </li>
    </ul>
  </div>
);

export default Home;