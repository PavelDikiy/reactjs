import React from 'react';
import { NavLink } from 'react-router-dom';

const Result = (props) => {
  if (props.location.query) {
    const { result } = props.location.query;

    return (
      <div>
        <div className="row">
          <h1>Результат</h1>
        </div>

        <div className="row">
          <h3>И так, на что Вы подписались</h3>

          <table className="table">
            <thead>
            <tr>
              <th>Наименование</th>
              <th>Значение</th>
            </tr>
            </thead>
            <tbody>
            {
              result.map((item, key) => {
                return (
                  <tr key={key}>
                    <td>{item.name}</td>
                    <td>{item.value} {item.symbol}</td>
                  </tr>
                )
              })
            }
            </tbody>
          </table>

          <NavLink to="/calculator" className="badge badge-light mt-3">← Верунуться к выбору ставок</NavLink>
        </div>
      </div>
    );
  } else {
    return <div>{ props.history.push('/calculator') }</div>;
  }
}

export default Result;