import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <h1> Jobly </h1>
        <p>All the jobs in one, convenient place.</p>
        {/* {this.props.loggedIn ? (
          <h2> Welcome Back!</h2>
        ) : (
          <button>Log In</button>
        )} */}
      </div>
    );
  }
}

export default Home;
