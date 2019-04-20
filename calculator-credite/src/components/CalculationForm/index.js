// # Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// # Redux
import { connect } from 'react-redux';
import { setLoanSum, setLoanCurrency, setLoanTerm } from '../../actions';


class CalculationForm extends Component {
  constructor() {
    super();

    this.changeLoanSum = this._changeLoanSum.bind(this);
    this.changeLoanCurrency = this._changeLoanCurrency.bind(this);
    this.changeLoanTerm = this._changeLoanTerm.bind(this);
  }

  render() {
    const {
      selectedRate,
      loanCurrency,
      loanTerm,
      loanSum
    } = this.props;
    
    return (
      <div className="row">
        <div className="col-sm">
          <p><b>Расчет по кредиту:</b></p>

          <div className="form-group">
            <label className="small-text" htmlFor="formControlRange">Сумма</label>
            <p className="form-control-result">{loanSum}</p>
            
            <input 
              id="formControlRange"
              className="form-control-range"
              type="range"
              value={loanSum}
              onChange={this.changeLoanSum}
              min={selectedRate.minSum} 
              max={selectedRate.maxSum}
            />
          </div>

          <div className="form-group row">
            <div className="col-sm">
              <label htmlFor="loanCurrency" className="small-text">Валюта</label>

              <select 
                id="loanCurrency"
                className="form-control" 
                value={loanCurrency}
                onChange={this.changeLoanCurrency}
              >
                { selectedRate.currency.map((item, i) => <option key={i}>{item}</option>) } 
              </select>
            </div>

            <div className="col-sm">
              <label htmlFor="loanTerm" className="small-text">Срок</label>

              <select 
                id="loanTerm"
                className="form-control" 
                value={loanTerm}
                onChange={this.changeLoanTerm}
              >
                { selectedRate.arrTerm.map((item, i) => <option key={i}>{item}</option>) } 
              </select>
            </div>

            <div className="col-sm">
              <Link className="btn btn-success"
                to={{
                  pathname: '/result', 
                  query: {
                    result: this.resultObj() // ???? Эта функция возвращает объект в строку, которая обрабатывается на странице результата и выводит общую информацию о кредите. Эта штука больше не понадобится, так как все данные хранятся в Redux хранилище
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
                    <p>{monthPayment} {this.correctCur() /* ?? */ }</p> 
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Общая переплата</span>
                    <p className="big-text">{fullSum} {this.correctCur() /* ?? */ }</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }


  _changeLoanSum(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(setLoanSum(Number(value)));
  }

  _changeLoanCurrency() {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(setLoanCurrency(value));
  }

  _changeLoanTerm() {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(setLoanTerm(Number(value)));
  }



  // ?
  _resultObj() {

  }

  // ? 
  _correctCur() {

  }
}


const mapStatetoProps = (state) => {

  return {

  }
};


export default CalculationForm;



//   state = {
//     isActive: localStorage.getItem('isActive') || false, // hasSelectedRate
//     filterObj: JSON.parse(localStorage.getItem('filterObj')) || {},
//     coef: localStorage.getItem('coef') || 0,
//     selectSum: localStorage.getItem('selectSum') || 0,
//     selectCur: localStorage.getItem('selectCur') || '',
//     selectTerm: localStorage.getItem('selectTerm') || 0,
//     monthPayment: localStorage.getItem('monthPayment') || 0,
//     overPayment: localStorage.getItem('overPayment') || 0,
//     fullSum: localStorage.getItem('fullSum') || 0
//   };

    // # ??

//   selectedRate = (id) => {
//     let newData = this.props.creditrate.slice().filter((item) => {
//       return item.id === id;
//     })[0];
//     newData.arrTerm = [];
//     for (let i = newData["minTerm"]; i <= newData["maxTerm"]; i++) {
//       newData["arrTerm"].push(i);
//     }

//     this.setState({
//       isActive: true,
//       filterObj: newData,
//       coef: newData.rate / 100 / 12,
//       selectSum: newData.minSum,
//       selectCur: newData.activeCurrency,
//       selectTerm: newData.minTerm
//     });

//     localStorage.setItem('isActive', true);
//     localStorage.setItem('filterObj', JSON.stringify(newData));
//     localStorage.setItem('coef', newData.rate / 100 / 12);
//     localStorage.setItem('selectSum', newData.minSum);
//     localStorage.setItem('selectCur', newData.activeCurrency);
//     localStorage.setItem('selectTerm', newData.minTerm);

//     this.countingResult();
//   };






//   fullSum = () => {
//     this.setState(({ coef, filterObj, selectCur, selectSum, selectTerm }) => {

//       let result = Math.ceil(+selectSum * +coef * Math.pow((1 + +coef), +selectTerm) / (Math.pow((1 + +coef), +selectTerm) - 1) * +selectTerm);

//       if (filterObj["activeCurrency"] === "доллары" && selectCur !== filterObj["activeCurrency"]) {
//         result *= 27;
//       }
//       if (filterObj["activeCurrency"] === "гривны" && selectCur !== filterObj["activeCurrency"]) {
//         result = Math.ceil(result / 27);
//       }

//       localStorage.setItem('fullSum', result);
//       return { fullSum: result }
//     });
//   };


    // #

//   monthPayment = () => {
//     this.setState(({ fullSum, selectTerm }) => {
//       const mp = Math.ceil(fullSum / selectTerm);
//       localStorage.setItem('monthPayment', mp);
//       return { monthPayment: mp }
//     });
//   };


    // #

//   overPayment = () => {
//     this.setState(({ fullSum, selectSum }) => {
//       localStorage.setItem('overPayment', fullSum - selectSum);
//       return { overPayment: fullSum - selectSum }
//     });
//   };


    // #

//   countingResult = () => {
//     this.fullSum();
//     this.monthPayment();
//     this.overPayment();
//   };


    // #

//   correctCur = () => {
//     return (this.state.selectCur === "гривны") ? 'грн.' : '$'
//   };


    // #

//   resultObj = () => {
//     return [
//       { name: "Ставка", value: this.state.filterObj.rate, symbol: '%' },
//       { name: "Сумма", value: this.state.selectSum, symbol: this.correctCur() },
//       { name: "Срок", value: this.state.selectTerm, symbol: 'мес.' },
//       { name: "Полная сумма", value: this.state.fullSum, symbol: this.correctCur() },
//       { name: "Ежемесячный платеж", value: this.state.monthPayment, symbol: this.correctCur() },
//       { name: "Переплата", value: this.state.overPayment, symbol: this.correctCur() }
//     ]
//   };