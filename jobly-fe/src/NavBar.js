import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'dodgerblue'
    };

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink
          className="navbar-brand"
          exact
          to="/"
          activeStyle={activeStyle}
        >
          {' '}
          Jobly
        </NavLink>{' '}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <NavLink
                exact
                to={`/jobs`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Jobs</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`/companies`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Companies</p>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`/profile`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Profile</p>
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to={`/`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Log out</p>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
