import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { companies: [], jobs: [], users: [] };
  }
  // componentdidmount to get the initial data
  // async componentDidMount() {
  //  await JoblyApi.getCompany(){

  //   }
  // }

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
