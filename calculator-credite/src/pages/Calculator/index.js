// # Core
import React, { Component } from 'react';
import { bool } from 'prop-types';

// # Redux
import { connect } from 'react-redux';
import { fetchLoanRates } from '../../actions';

// # Instruments
import loanRatesData from '../../loan-rates-data.json';
import './styles.css';

// # Components
import Preloader from '../../components/Preloader';
import LoanRatesTable from '../../components/LoanRates';
import CalculationForm from '../../components/CalculationForm';


class Calculator extends Component {
  static propTypes = {
    isFetchingLoanRates: bool,
    hasSelectedLoanRate: bool
  }

  constructor() {
    super();

    this.renderChooseRateMessage = this._renderChooseRateMessage.bind(this);
  }

  componentWillMount() {
    const { dispatch } = this.props;

    dispatch(fetchLoanRates(loanRatesData));
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
  const { 
    isFetchingLoanRates,
    hasSelectedLoanRate
  } = state.loanRatesStorage;

  return { 
    isFetchingLoanRates,
    hasSelectedLoanRate
  }
}

export default connect(mapStateToProps)(Calculator);