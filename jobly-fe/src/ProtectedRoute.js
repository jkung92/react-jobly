import React, { Component } from 'react';
import { Redirect, Route } from 'react-router-dom';

class ProtectedRoute extends Component {
  render() {
    console.log(`inside protected route, `, this.props.data);
    if (this.props.data && !this.props.data.currUser) {
      return <Redirect to="/" />;
    }
    return <Route {...this.props} />;
  }
}

export default ProtectedRoute;
