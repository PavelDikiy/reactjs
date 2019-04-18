import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Preloader from '../../components/Preloader';
import LoanRates from '../../components/LoanRates';
import './styles.css';

//
import widthCreditRateService from '../../HOC/with-creditrate-service';


class Calculator extends Component {
  constructor() {
    super();

    this.state = {
      hasSelectedRate: true,
    }

    this.renderLoanRatesTable = this._renderLoanRatesTable.bind(this);
    this.renderLoanRate = this._renderLoanRate.bind(this);
    this.renderChooseRateMessage = this._renderChooseRateMessage.bind(this);
  }

  render() {
    const { hasSelectedRate } = this.state;
    const { isLoading } = this.props;

    if (isLoading) {
      return <Preloader />
    }

    return (
      <div className="container">
        <h1>Решение задачи</h1>

        <div className="center">
          <h3 className="mt-4">Таблица ставок</h3>
          <LoanRates />

          {
            hasSelectedRate
            ? 'Hello world!'
            : this.renderChooseRateMessage()
          }
        </div>
      </div>
    )
  }

  _renderChooseRateMessage() {
    return (
      <div className="mb-3 mt-3">
        <h3>Выберите ставку</h3>
        <p>Что бы посчитать выгоды кредита, Выберите пожалуйста размер ставки</p>
      </div>
    )
  }
}

export default Calculator;



// class Calculator extends Component {
//   componentDidMount() {
//     const { creditRateService, creditrateLoaded } = this.props;
//     creditRateService.getRate()
//       .then((data) => {
//         creditrateLoaded(data);
//       });
//   }

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

//   selectedSum = (e) => {
//     const value = +e.target.value;
//     this.setState({
//       selectSum: value
//     });
//     localStorage.setItem('selectSum', value);
//     this.countingResult();
//   };
//   selectedCur = (e) => {
//     const value = e.target.value;
//     this.setState({
//       selectCur: value
//     });
//     localStorage.setItem('selectCur', value);
//     this.countingResult();
//   };
//   selectedTerm = (e) => {
//     const value = e.target.value;
//     this.setState({
//       selectTerm: value
//     });
//     localStorage.setItem('selectTerm', value);
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
//   monthPayment = () => {

//     this.setState(({ fullSum, selectTerm }) => {
//       const mp = Math.ceil(fullSum / selectTerm);
//       localStorage.setItem('monthPayment', mp);
//       return { monthPayment: mp }
//     });
//   };
//   overPayment = () => {
//     this.setState(({ fullSum, selectSum }) => {
//       localStorage.setItem('overPayment', fullSum - selectSum);
//       return { overPayment: fullSum - selectSum }
//     });
//   };

//   countingResult = () => {
//     this.fullSum();
//     this.monthPayment();
//     this.overPayment();
//   };

//   correctCur = () => {
//     return (this.state.selectCur === "гривны") ? 'грн.' : '$'
//   };

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

//   render() {
//     const { creditrate, loading } = this.props;
//     const {
//       isActive, filterObj, selectSum,
//       selectCur, selectTerm, monthPayment, fullSum
//     } = this.state;


// const mapStateToProps = ({ creditrate, loading }) => {
//   return { creditrate, loading };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     creditrateLoaded: (newCreditrate) => {
//       dispatch({
//         type: 'CREDITRATE_LOADED',
//         rate: newCreditrate
//       });
//     }
//   };
// };

// export default widthCreditRateService()(
//   connect(mapStateToProps, mapDispatchToProps)(Calculator)
// );