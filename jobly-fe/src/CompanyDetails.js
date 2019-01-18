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
    // need to hit api again to update the jobs array to include state
    const jobs = await JoblyApi.getAllJobs();
    console.log(`these are the jobs ---------`, jobs);
    const companyJobs = jobs.filter(
      job => job.company_handle === this.state.handle
    );
    console.log(`these are the company jobs`, companyJobs);
    this.setState({ jobs: companyJobs });
  }

  updateCompanyJobs = async () => {
    const allJobs = await JoblyApi.getAllJobs();
    const companyJobs = allJobs.filter(
      job => job.company_handle === this.state.handle
    );
    this.setState({ jobs: companyJobs });
  };

  render() {
    if (!this.state.handle) {
      return <h3>Loading...</h3>;
    }
    console.log('conpany details, jobs array', this.state.jobs);
    return (
      <div>
        <p>{this.state.name}</p>
        <p>{this.state.description}</p>
        {this.state.jobs.map(job => (
          <Card job={job} updateJobs={this.updateCompanyJobs} />
        ))}
      </div>
    );
  }
}

export default CompanyDetails;
