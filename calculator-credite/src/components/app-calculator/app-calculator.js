import React, {Component} from 'react';
import './app-calculator.css';

class AppCalculator extends Component {
  render() {
    return (
      <div className="container">
        <h1>Решение задачи</h1>
        <div>
          {/*          <div className="mb-3 mt-3">
           <h3>Выберите ставку</h3>
           <p>Что бы посчитать выгоды кредита, Выберите пожалуйста размер ставки</p>
           </div>*/}
          <div className="row">
            <div className="col-sm">
              <p><strong>Расчет по кредиту:</strong></p>
              <div className="form-group">
                <label for="formControlRange" className="small-text">Сумма</label>
                <p className="form-control-result">0</p>
                <input type="range" className="form-control-range" id="formControlRange" min="0" max="1000"/>
              </div>
              <div className="form-group row">
                <div className="col-sm">
                  <label for="selectcur" className="small-text">Валюта</label>
                  <select className="form-control" id="selectcur">
                    <option>1</option>
                  </select>
                </div>
                <div className="col-sm">
                  <label for="selectterm" className="small-text">Срок</label>
                  <select className="form-control" id="selectterm">
                    <option>1</option>
                  </select>
                </div>

              </div>
              <button className="btn btn-success"> Взять кредит</button>
            </div>
            <div className="col-sm">
              <div className="resultCredit">
                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Ставка по кредиту</span>
                    <p>0%</p>
                  </div>
                  <div className="col-sm">
                    <span className="small-text">Ежемесячный платеж</span>
                    <p>10 000 грн.</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Общая переплата</span>
                    <p className="big-text">19 000 грн.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        <h3 className="mt-4">Таблица ставок</h3>
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Размер ставки (%)</th>
            <th scope="col">Валюта</th>
            <th scope="col">Сума от, до</th>
            <th scope="col">Срок от, до</th>
          </tr>
          </thead>
          <tr>
            <td>1
              <button type="button" className="btn btn-outline-primary ml-3">Выбрать</button>
            </td>
            <td>2</td>
            <td>3 тыс.</td>
            <td>4 мес.</td>
          </tr>
        </table>
      </div>
    )
  }
}

export default AppCalculator;