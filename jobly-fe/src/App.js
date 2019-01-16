import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [], jobs: [], users: [] };
  }

  render() {
    return (
      <div className="App">
        <NavBar data={this.state} />
        <Routes data={this.state} />
      </div>
    );
  }
}

export default App;
