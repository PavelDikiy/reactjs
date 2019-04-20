// # Core
import React, { Component } from 'react';

// # Redux
import { connect } from 'react-redux';
import { addSelectedLoanRate } from '../../actions';


class LoanRatesTable extends Component {
  // Add prop-types
  // Add defaultProps
  
  constructor() {
    super();

    this.renderLoanRate = this._renderLoanRate.bind(this);
    this.selectLoanRate = this._selectLoanRate.bind(this);
  }

  render() {
    const { loanRates } = this.props;

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Размер ставки (%)</th>
            <th>Валюта</th>
            <th>Сума от, до</th>
            <th>Срок от, до</th>
          </tr>
        </thead>
        <tbody>
          { loanRates.map(loanRate => this.renderLoanRate(loanRate)) }
        </tbody>
      </table>
    )
  }

  _renderLoanRate(loanRate) {
    const { selectedLoanRate } = this.props;
    const {
      id,
      rate,
      minSum,
      maxSum,
      minTerm,
      maxTerm,
      activeCurrency
    } = loanRate;
  
    return (
      <tr>
        <td>
          <span>{rate}</span>
          <button
            className={`btn btn-outline-primary ml-3 ${selectedLoanRate.id === id ? 'active' : ''}`}
            onClick={() => this.selectLoanRate(loanRate)} // work with this fuction
          >Выбрать</button>
        </td>
  
        <td>{activeCurrency}</td>
        <td>{minSum / 1000} - {maxSum / 1000} тыс.</td>
        <td>{minTerm} - {maxTerm} мес.</td>
      </tr>
    )
  }

  _selectLoanRate(loanRate) {
    const { 
      selectedLoanRate, 
      dispatch
    } = this.props;

    if (selectedLoanRate.id === id) return;

    return dispatch(addSelectedLoanRate(loanRate));
  }
}


const mapStateToProps = (state) => {
  const { loanRates } = state;

  return {
    loanRates,
    selectedLoanRate,
  }
}

export default connect(mapStateToProps)(LoanRatesTable);