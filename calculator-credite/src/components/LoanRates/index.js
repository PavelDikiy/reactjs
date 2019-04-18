import React, { Component } from 'react';

class LoanRates extends Component {
  constructor() {
    super();

    this.renderLoanRate = this._renderLoanRate.bind(this);
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
          { loanRates.map(this.renderLoanRate(loanRate)) }
        </tbody>
      </table>
    )
  }

  _renderLoanRate(loanRate) {
    const {
      rate,
      id,
      activeCurrency,
      minSum,
      maxSum,
      minTerm,
      maxTerm
    } = loanRate;
  
    return (
      <tr>
        <td>
          <span>{rate}</span>
          <button
            className={`btn btn-outline-primary ml-3 ${(filterObj.id === id) ? 'active' : ''}`}
            onClick={() => this.selectLoanRate(loanRate.id)}
          >Выбрать</button>
        </td>
  
        <td>{activeCurrency}</td>
        <td>{minSum / 1000} - {maxSum / 1000} тыс.</td>
        <td>{minTerm} - {maxTerm} мес.</td>
      </tr>
    )
  }
}

export default LoanRates;