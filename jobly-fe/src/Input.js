import React, { Component } from 'react';

/* This is an Input component, get the input from the user for each input cell */
// could be bad , as we have state here and in parent
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      value: this.props.value
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value }, () => {
      this.props.updateLoginInfo(this.state);
    });
  }

  render() {
    return (
      <div>
        <label htmlFor={this.props.name}>{this.props.name}</label>
        <input type={this.props.type} onChange={this.handleChange} />
      </div>
    );
  }
}

export default Input;
