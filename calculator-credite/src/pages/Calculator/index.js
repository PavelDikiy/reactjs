// # Core
import React, { Component } from 'react';

// # Redux
import { connect } from 'react-redux';
import { fetchLoanRates } from '../../actions';


// # Instruments
import { customTimeout } from '../../helpers';
import loanRatesData from './loan-rates-data.json';
import './styles.css';

// # Components
import Preloader from '../../components/Preloader';
import LoanRatesTable from '../../components/LoanRates';
import CalculationForm from '../../components/CalculationForm';


class Calculator extends Component {
  // add prop-types
  // add defaultProps

  constructor() {
    super();

    this.renderChooseRateMessage = this._renderChooseRateMessage.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;

    customTimeout(() => {
      dispatch(fetchLoanRates(loanRatesData));
    }, 1000);
  }

  render() {
    const { 
      isFetchingLoanRates,
      hasSelectedLoanRate
     } = this.props;

    if (isFetchingLoanRates) {
      return <Preloader />
    }

    return (
      <div className="container">
        <h1>Решение задачи</h1>

        <div className="center">
          <h3 className="mt-4">Таблица ставок</h3>
          <LoanRatesTable />

          {
            hasSelectedLoanRate
            ? <CalculationForm />
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


const mapStateToProps = (state) => {
  const { isFetchingLoanRates, hasSelectedLoanRate } = state;  

  return {
    isFetchingLoanRates,
    hasSelectedLoanRate
  }
}


export default connect(mapStateToProps)(Calculator);