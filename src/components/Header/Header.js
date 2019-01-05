import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import "./Header.css";
import Logo from "../Logo";

class Header extends Component {
    render() {
        return (
            <React.Fragment>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink to="/" activeClassName="active" className="navbar-brand">
                <Logo url="https://www.nulldata.com/img/logo.png" css="img-header"/>
              </NavLink>
            </div>
            <div className="collapse navbar-collapse">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to="/about" activeClassName="active">
                    Lista De Empleados
                  </NavLink>
                </li>
                <li className="space-nav">|</li>
                <li>
                  <NavLink to="/terms" activeClassName="active">
                    Registro de empleados
                  </NavLink>
                </li>
                <li className="space-nav">|</li>


              </ul>
            </div>
          </div>
        </nav>
      </React.Fragment>
        );
    }
}

export default Header;