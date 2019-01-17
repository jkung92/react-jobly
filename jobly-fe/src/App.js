import React, { Component } from 'react';
import './App.css';
import NavBar from './NavBar';
import Routes from './Routes';
import JoblyApi from './JoblyApi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { currUser: undefined };
  }

  async componentDidMount() {
    if (localStorage.getItem('_token')) {
      const midPart = localStorage.getItem('_token').split('.')[1];
      const payload = atob(midPart);
      const payloadJSON = JSON.parse(payload);
      const userName = payloadJSON.username;
      const currUser = await JoblyApi.getUserInfo(userName);
      console.log(currUser);
      this.setState({ currUser });
    }
  }

  updateCurrUser = async token => {
    const payload = atob(token.split('.')[1]);
    const payloadJSON = JSON.parse(payload);
    const userName = payloadJSON.username;
    const currUser = await JoblyApi.getUserInfo(userName);
    console.log(currUser);
    this.setState({ currUser });
  };
  // async componentDidMount() {
  //  await JoblyApi.getCompany(){

  //   }
  // }
  resetState = () => {
    this.setState({ currUser: undefined });
  };

  render() {
    return (
      <div className="App">
        <NavBar data={this.state} resetState={this.resetState} />
        <Routes data={this.state} getUserInfo={this.updateCurrUser} />
      </div>
    );
  }
}

export default App;
