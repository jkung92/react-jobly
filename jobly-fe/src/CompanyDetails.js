import React, { Component } from 'react';
import JoblyApi from './JoblyApi';
import Card from './Card';

class CompanyDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      handle: '',
      name: '',
      num_employees: null,
      description: '',
      logo_url: '',
      jobs: []
    };
  }

  async componentDidMount() {
    const company = await JoblyApi.getCompany(this.props.match.params.handle);
    this.setState({ ...company });
  }

  render() {
    if (!this.state.handle) {
      return <h3>Loading...</h3>;
    }
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.description}</p>
        {this.state.jobs.map(job => (
          <Card job={job} />
        ))}
      </div>
    );
  }
}

export default CompanyDetails;
