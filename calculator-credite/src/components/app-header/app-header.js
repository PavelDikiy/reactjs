import React from 'react'
import './app-header.css';
import { NavLink } from 'react-router-dom';

const AppHeader = ()=>{
return (
  <header>
    <div className="row">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink exact activeClassName="active" className="nav-link" to="/">Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/calculator">Решение задачи</NavLink>
        </li>
      </ul>
    </div>
  </header>
);
};

export default AppHeader;