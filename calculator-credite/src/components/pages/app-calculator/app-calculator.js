import React, {Component} from 'react';
import './app-calculator.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {widthCreditRateService} from '../../hoc';
import Preloader from '../../preloader';


class AppCalculator extends Component {

  componentDidMount() {
    const {creditRateService, creditrateLoaded} = this.props;
    creditRateService.getRate()
      .then((data) => {
        creditrateLoaded(data);
      });
  }

  state = {
    isActive: localStorage.getItem('isActive') || false,
    filterObj: JSON.parse(localStorage.getItem('filterObj')) || {},
    coef: localStorage.getItem('coef') || 0,
    selectSum: localStorage.getItem('selectSum') || 0,
    selectCur: localStorage.getItem('selectCur') || '',
    selectTerm: localStorage.getItem('selectTerm') || 0,
    monthPayment: localStorage.getItem('monthPayment') || 0,
    overPayment: localStorage.getItem('overPayment') || 0,
    fullSum: localStorage.getItem('fullSum') || 0
  };

  selectedRate = (id) => {
    let newData = this.props.creditrate.slice().filter((item) => {
      return item.id === id;
    })[0];
    newData.arrTerm = [];
    for (let i = newData["minTerm"]; i <= newData["maxTerm"]; i++) {
      newData["arrTerm"].push(i);
    }

    this.setState({
      isActive: true,
      filterObj: newData,
      coef: newData.rate / 100 / 12,
      selectSum: newData.minSum,
      selectCur: newData.activeCurrency,
      selectTerm: newData.minTerm
    });
    localStorage.setItem('isActive', true);
    localStorage.setItem('filterObj', JSON.stringify(newData));
    localStorage.setItem('coef', newData.rate / 100 / 12);
    localStorage.setItem('selectSum', newData.minSum);
    localStorage.setItem('selectCur', newData.activeCurrency);
    localStorage.setItem('selectTerm', newData.minTerm);
    this.countingResult();
  };

  selectedSum = (e) => {
    const value = +e.target.value;
    this.setState({
      selectSum: value
    });
    localStorage.setItem('selectSum', value);
    this.countingResult();
  };
  selectedCur = (e) => {
    const value = e.target.value;
    this.setState({
      selectCur: value
    });
    localStorage.setItem('selectCur', value);
    this.countingResult();
  };
  selectedTerm = (e) => {
    const value = e.target.value;
    this.setState({
      selectTerm: value
    });
    localStorage.setItem('selectTerm', value);
    this.countingResult();
  };


  fullSum = () => {
    this.setState(({coef, filterObj, selectCur, selectSum, selectTerm}) => {

      let result = Math.ceil(+selectSum * +coef * Math.pow((1 + +coef), +selectTerm) / (Math.pow((1 + +coef), +selectTerm) - 1) * +selectTerm);

      if (filterObj["activeCurrency"] === "доллары" && selectCur !== filterObj["activeCurrency"]) {
        result *= 27;
      }
      if (filterObj["activeCurrency"] === "гривны" && selectCur !== filterObj["activeCurrency"]) {
        result = Math.ceil(result / 27);
      }

      localStorage.setItem('fullSum', result);
      return {fullSum: result}
    });
  };
  monthPayment = () => {

    this.setState(({fullSum, selectTerm}) => {
      const mp = Math.ceil(fullSum / selectTerm);
      localStorage.setItem('monthPayment', mp);
      return {monthPayment: mp}
    });
  };
  overPayment = () => {
    this.setState(({fullSum, selectSum}) => {
      localStorage.setItem('overPayment', fullSum - selectSum);
      return {overPayment: fullSum - selectSum}
    });
  };

  countingResult = () => {
    this.fullSum();
    this.monthPayment();
    this.overPayment();
  };

  correctCur = () => {
    return (this.state.selectCur === "гривны") ? 'грн.' : '$'
  };

  resultObj = () => {
    return [
      {name: "Ставка", value: this.state.filterObj.rate, symbol: '%'},
      {name: "Сумма", value: this.state.selectSum, symbol: this.correctCur()},
      {name: "Срок", value: this.state.selectTerm, symbol: 'мес.'},
      {name: "Полная сумма", value: this.state.fullSum, symbol: this.correctCur()},
      {name: "Ежемесячный платеж", value: this.state.monthPayment, symbol: this.correctCur()},
      {name: "Переплата", value: this.state.overPayment, symbol: this.correctCur()}
    ]
  };

  render() {
    const {creditrate, loading} = this.props;
    const {
      isActive, filterObj, selectSum,
      selectCur, selectTerm, monthPayment, fullSum
    } = this.state;

    if (loading) {
      return <Preloader />;
    }

    const elements = creditrate.map((item) => {
      return (
        <tr key={item.id}>
          <td>{item.rate}
            <button type="button"
                    className={(filterObj.id === item.id) ? 'btn btn-outline-primary ml-3  active' : 'btn btn-outline-primary ml-3'}
                    onClick={() => this.selectedRate(item.id)}
            >Выбрать
            </button>
          </td>
          <td>{item.activeCurrency}</td>
          <td>{item.minSum / 1000} - {item.maxSum / 1000} тыс.</td>
          <td>{item.minTerm} - {item.maxTerm} мес.</td>
        </tr>
      );
    });

    return (
      <div className="container ">
        <h1>Решение задачи</h1>
        <div className="center">
          <div>
            { !isActive ? (
              <div className="mb-3 mt-3">
                <h3>Выберите ставку</h3>
                <p>Что бы посчитать выгоды кредита, Выберите пожалуйста размер ставки</p>
              </div>
            ) : (
              <div className="row">
                <div className="col-sm">
                  <p><strong>Расчет по кредиту:</strong></p>
                  <div className="form-group">
                    <label htmlFor="formControlRange" className="small-text">Сумма</label>
                    <p className="form-control-result">{selectSum}</p>
                    <input type="range" className="form-control-range" id="formControlRange"
                           value={selectSum}
                           onChange={this.selectedSum}
                           min={filterObj.minSum}
                           max={filterObj.maxSum}
                    />
                  </div>
                  <div className="form-group row">
                    <div className="col-sm">
                      <label htmlFor="selectcur" className="small-text">Валюта</label>
                      <select className="form-control" id="selectcur"
                              onChange={this.selectedCur}
                              value={selectCur}
                      >
                        {filterObj.currency.map((item, i) => {
                          return <option key={i}>{item}</option>
                        })}
                      </select>
                    </div>
                    <div className="col-sm">
                      <label htmlFor="selectterm" className="small-text">Срок</label>
                      <select className="form-control" id="selectterm"
                              onChange={this.selectedTerm}
                              value={selectTerm}
                      >
                        {filterObj.arrTerm.map((item, i) => {
                          return <option key={i}>{item}</option>
                        })}
                      </select>
                    </div>

                  </div>
                  <Link className="btn btn-success"
                        to={{
                          pathname: `/result`, query: {
                            result: this.resultObj()
                          }
                        }}> Взять кредит</Link>
                </div>
                <div className="col-sm">
                  <div className="resultCredit">
                    <div className="row">
                      <div className="col-sm">
                        <span className="small-text">Ставка по кредиту</span>
                        <p>{filterObj.rate}%</p>
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
            )}
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
            <tbody>
            {elements}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}


const mapStateToProps = ({creditrate, loading}) => {
  return {creditrate, loading};
};

const mapDispatchToProps = (dispatch) => {
  return {
    creditrateLoaded: (newCreditrate) => {
      dispatch({
        type: 'CREDITRATE_LOADED',
        payload: newCreditrate
      });
    }
  };
};

export default widthCreditRateService()(
  connect(mapStateToProps, mapDispatchToProps)(AppCalculator)
);