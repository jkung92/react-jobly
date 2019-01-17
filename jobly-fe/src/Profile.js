import React, { Component } from 'react';

class Profile extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    this.state = { fullName: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    // do something with form data
  }
  handleChange(evt) {
    // runs on every keystroke event
  }
  render() {
    return <h1>hi</h1>;
    //   <form onSubmit={this.handleSubmit}>
    //     <label for="fullname">Full Name:</label>
    //     <input
    //       name="fullname"
    //       value={this.state.fullName}
    //       onChange={this.handleChange}
    //     />
    //     <button>Add!</button>
    //   </form>
    // );
    // }
  }
}

export default Profile;
