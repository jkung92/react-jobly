import { Route, Switch, Redirect } from 'react-router-dom';
import NavBar from './NavBar.js';
import React, { Component } from 'react';
import Home from './Home';
import Jobs from './Jobs';
import Companies from './Companies';
import CompanyDetails from './CompanyDetails';
import Profile from './Profile';
import Login from './Login';

class Routes extends Component {
  const;

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route
            exact
            path="/jobs"
            render={() => <Jobs data={this.props.jobs} />}
          />
          <Route
            path="/companies"
            render={() => <Companies data={this.props.companies} />}
          />
          <Route
            exact
            path="/companies/:companyName"
            render={routeProps => (
              <CompanyDetails {...routeProps} data={this.props.jobs} />
            )}
          />
          <Route
            exact
            path="/profile"
            render={() => <Profile data={this.props.users} />}
          />
          <Route
            exact
            path="/login"
            render={() => <Login data={this.props.users} />}
          />
          <Redirect to="/" />
        </Switch>
      </div>
    );
  }
}

export default Routes;
