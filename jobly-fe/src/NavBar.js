import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  render() {
    const activeStyle = {
      fontWeight: 'bold',
      color: 'dodgerblue'
    };

    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <NavLink
                exact
                to={`/jobs`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Jobs</p>
              </NavLink>
            </li>
            <li class="nav-item">
              <NavLink
                exact
                to={`/companies`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Companies</p>
              </NavLink>
            </li>
            <li class="nav-item">
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
