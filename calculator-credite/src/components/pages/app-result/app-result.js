import React from 'react';
import {NavLink} from 'react-router-dom';
import './app-result.css';

const AppResult = () => {
  return (
    <div>
      <div className="row">
        <h1>Резудьтат</h1>
      </div>
      <div className="row">
        <h3>И так, на что Вы подписались</h3>
        <table className="table">
          <tr>
            <th>Наименование</th>
            <th>Значение</th>
          </tr>
          <tr>
            <td>имя</td>
            <td>Значение</td>
          </tr>
        </table>
        <NavLink to="/calculator" class="badge badge-light mt-3">← Верунуться к выбору ставок</NavLink>
      </div>
    </div>
  );
}

export default AppResult;