// # Core
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// # Redux
import { connect } from 'react-redux';
import { setLoanSum, setLoanCurrency, setLoanTerm } from '../../actions';

// # Instruments
import { getUniqueID } from '../../helpers';


class CalculationForm extends Component {
  constructor() {
    super();

    this.changeLoanSum = this._changeLoanSum.bind(this);
    this.changeLoanCurrency = this._changeLoanCurrency.bind(this);
    this.changeLoanTerm = this._changeLoanTerm.bind(this);

    this.renderLoanTermOptions = this._renderLoanTermOptions.bind(this);
    this.calculateMounthPaymentsValue = this._calculateMounthPaymentsValue.bind(this);
    this.calculateFullLoanSum = this._calculateFullLoanSum.bind(this);
  }

  render() {
    const {
      selectedLoanRate,
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
            <p className="form-control-result">
              {
                loanSum === 0 || loanSum < selectedLoanRate.minSum || loanSum > selectedLoanRate.maxSum 
                  ? selectedLoanRate.minSum 
                  : loanSum 
              }
            </p>
            
            <input 
              id="formControlRange"
              className="form-control-range"
              type="range"
              value={
                loanSum === 0 || loanSum < selectedLoanRate.minSum || loanSum > selectedLoanRate.maxSum 
                  ? selectedLoanRate.minSum 
                  : loanSum 
              }
              onChange={this.changeLoanSum}
              min={selectedLoanRate.minSum} 
              max={selectedLoanRate.maxSum}
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
                { selectedLoanRate.currencies.map(item => <option key={getUniqueID()}>{item}</option>) } 
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
                { this.renderLoanTermOptions() } 
              </select>
            </div>

            <div className="col-sm">
              <Link className="btn btn-success" to={{ pathname: '/result' }}>Взять кредит</Link>
            </div>

            <div className="col-sm">
              <div className="resultCredit">
                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Ставка по кредиту</span>
                    <p>{selectedLoanRate.rate}%</p>
                  </div>

                  <div className="col-sm">
                    <span className="small-text">Ежемесячный платеж</span>
                    <p>
                      {this.calculateMounthPaymentsValue()} 
                      {(loanCurrency === "гривна") ? 'грн.' : '$'}
                    </p> 
                  </div>
                </div>

                <div className="row">
                  <div className="col-sm">
                    <span className="small-text">Общая сумма по кредиту</span>
                    <p className="big-text">
                      {this.calculateFullLoanSum()} 
                      {(loanCurrency === "гривна") ? 'грн.' : '$'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  _renderLoanTermOptions() {
    const { minTerm, maxTerm } = this.props.selectedLoanRate;
    
    let result = [];

    for(let i = minTerm; i <= maxTerm; i++) {
      result.push(i);
    }

    return result.map(term => <option key={getUniqueID()}>{term}</option>)
  }

  _changeLoanSum(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(setLoanSum(Number(value)));
  }

  _changeLoanCurrency(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    dispatch(setLoanCurrency(value));
  }

  _changeLoanTerm(event) {
    const { dispatch } = this.props;
    const { value } = event.target;

    console.log(value);

    dispatch(setLoanTerm(Number(value)));
  }

  _calculateMounthPaymentsValue() {
    const { loanTerm, fullLoanSum } = this.props;

    return Math.ceil(fullLoanSum / loanTerm);
  }

  _calculateFullLoanSum() {
    const { 
      loanSum,
      loanTerm,
      loanCurrency,
      selectedLoanRate
    } = this.props;

    const coef = selectedLoanRate.rate / 100 / 12;
    let fullLoanSum = Math.ceil(loanSum * coef * Math.pow((1 + coef), loanTerm) / (Math.pow((1 + coef), loanTerm) - 1) * loanTerm);

    if (selectedLoanRate.activeCurrency === 'доллар' && loanCurrency !== selectedLoanRate.activeCurrency) {
      fullLoanSum *= 27;
    } 

    if (selectedLoanRate.activeCurrency === 'гривна' && loanCurrency !== selectedLoanRate.activeCurrency) {
      fullLoanSum = Math.ceil(fullLoanSum / 27);
    }

    return fullLoanSum;
  }
}


const mapStateToProps = (state) => {
  const {
    loanSum,
    loanTerm,
    loanCurrency,
    selectedLoanRate
  } = state.loanRatesStorage;

  return {
    loanSum,
    loanTerm,
    loanCurrency,
    selectedLoanRate
  }
};


export default connect(mapStateToProps)(CalculationForm);



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