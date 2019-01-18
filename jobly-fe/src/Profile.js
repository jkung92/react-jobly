import React, { Component } from 'react';
import JoblyApi from './JoblyApi';

class Profile extends Component {
  constructor(props) {
    super(props);
    // default fullName is an empty string
    const {
      username,
      first_name,
      last_name,
      email,
      photo_url,
      password
    } = this.props.data.currUser;
    this.state = {
      username,
      first_name,
      last_name,
      email,
      photo_url,
      password
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // ** BUG -- password field doesn't work, still lets us change user data without correct password
  async handleSubmit(evt) {
    evt.preventDefault();
    // call the api
    const { username, ...data } = this.state;
    const updatedUser = await JoblyApi.patchUserInfo(username, data);
    console.log(`This is the updated user details: --`, updatedUser);
    //go to the home page
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  render() {
    console.log(`inside Profile-------`, this.props);
    return (
      <div className=" d-flex bd-highlight ">
        <h2> Profile </h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label for="username">Username</label>
            <input name="username" value={this.state.username} disabled />
          </div>
          <div>
            <label for="firstName">First Name</label>
            <input
              name="first_name"
              value={this.state.first_name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="lastName">Last Name</label>
            <input
              name="last_name"
              value={this.state.last_name}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="photoUrl">Photo URL</label>
            <input
              name="photo_url"
              value={this.state.photo_url}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label for="password">Re-enter Password</label>
            <input
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save Changes
          </button>
        </form>
      </div>
    );
  }
}

export default Profile;
