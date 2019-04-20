// # Core
import React from 'react'
import { NavLink } from 'react-router-dom';


const Header = () => (
  <header>
    <div className="row">
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/" exact>Главная</NavLink>
        </li>
        <li className="nav-item">
          <NavLink activeClassName="active" className="nav-link" to="/calculator">Решение задачи</NavLink>
        </li>
      </ul>
    </div>
  </header>
);

export default Header;