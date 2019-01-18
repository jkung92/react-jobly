import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
const activeStyle = {
  fontWeight: 'bold',
  color: 'dodgerblue'
};

class NavBar extends Component {
  logOut = () => {
    alert('Successfully logged out!');
    localStorage.clear();
    // clear the app state
    console.log('navbar', this.props);
    this.props.resetState();
  };

  renderLoggedIn = () => {
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
          <span className="navbar-nav">
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
            {/* // To secure this we have to go to the server in a ComponentDidMount to make sure valid token */}
            {!localStorage.getItem('_token') ? (
              <NavLink
                exact
                to={`/login`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p>Login</p>
              </NavLink>
            ) : (
              <NavLink
                exact
                to={`/`}
                activeStyle={activeStyle}
                className="nav-link"
              >
                <p onClick={this.logOut}> Log out</p>
              </NavLink>
            )}
          </span>
        </div>
      </nav>
    );
  };

  renderLoggedOut = () => {
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
        {!localStorage.getItem('_token') ? (
          <span>
            <NavLink
              exact
              to={`/login`}
              activeStyle={activeStyle}
              className="nav-link"
            >
              <p>Login</p>
            </NavLink>
          </span>
        ) : (
          <span>
            <NavLink
              exact
              to={`/`}
              activeStyle={activeStyle}
              className="nav-link"
            >
              <p onClick={this.logOut}> Log out</p>
            </NavLink>
          </span>
        )}
      </nav>
    );
  };

  render() {
    console.log(this.props.data);
    return this.props.data.currUser
      ? this.renderLoggedIn()
      : this.renderLoggedOut();
  }
}

export default NavBar;
// return this.props.data ? this.renderLoggedIn() : this.renderLoggedOut();
