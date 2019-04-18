import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CalculationForm extends Component {
  constructor() {
    super();

    this.state = {
      selectedSum: 10,
      selectedRate: {
        "id": 1,
        "rate": 4.25,
        "minSum": 100100,
        "maxSum": 190000,
        "minTerm": 12,
        "maxTerm": 60,
        "currency": [
          "гривны",
          "доллары"
        ],
        "activeCurrency": "доллары"
      },
    }
  }

  render() {
    const {
      selectedSum,
      selectedRate,

    } = this.state;
    
    return (
      <div className="row">
        <div className="col-sm">
          <p><b>Расчет по кредиту:</b></p>

          <div className="form-group">
            <label className="small-text" htmlFor="formControlRange">Сумма</label>
            <p className="form-control-result">{selectedSum}</p>
            <input 
              id="formControlRange"
              className="form-control-range"
              type="range"
              value={selectedSum}
              onChange={this.selectedSum}
              min={selectedRate.minSum} 
              max={selectedRate.maxSum}
            />
          </div>

          <div className="form-group row">
            <div className="col-sm">
              <label htmlFor="selectCurrency" className="small-text">Валюта</label>

              <select 
                id="selectCurrency"
                className="form-control" 
                value={selectCur}
                onChange={this.selectedCur}        
              >
                { selectedRate.currency.map((item, i) => <option key={i}>{item}</option>) } 
              </select>
            </div>

            <div className="col-sm">
              <label htmlFor="selectTerm" className="small-text">Срок</label>

              <select 
                id="selectTerm"
                className="form-control" 
                value={selectTerm}
                onChange={this.selectedTerm}     
              >
                { selectedRate.arrTerm.map((item, i) => <option key={i}>{item}</option>) } 
              </select>
            </div>

            <div className="col-sm">
              <Link className="btn btn-success"
                to={{
                  pathname: '/result', 
                  query: {
                    result: this.resultObj() // ?
                  }
                }}
              >Взять кредит</Link>
            </div>

            <div className="col-sm">
              <div className="resultCredit">
                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Ставка по кредиту</span>
                    <p>{selectedRate.rate}%</p>
                  </div>

                  <div className="col-sm">
                    <span className="small-text">Ежемесячный платеж</span>
                    <p>{monthPayment} {this.correctCur()}</p>
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Общая переплата</span>
                    <p className="big-text">{fullSum} {this.correctCur()}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default CalculationForm;