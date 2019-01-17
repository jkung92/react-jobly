import React, { Component } from 'react';
//import axios from 'axios';
import JoblyApi from './JoblyApi';
import Card from './Card';
import SearchBar from './SearchBar';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { jobs: [] };
    this.updateSearch = this.updateSearch.bind(this);
  }

  async componentDidMount() {
    const allJobs = await JoblyApi.getAllJobs();
    this.setState({ jobs: allJobs });
  }

  // get the searchedJobs
  async updateSearch(jobName) {
    const filteredJobs = await JoblyApi.searchJob(jobName);
    this.setState({ jobs: filteredJobs });
  }

  render() {
    //const Jobs = this.props.data;

    return (
      <div>
        <h1> Jobs </h1>
        <SearchBar updateSearch={this.updateSearch} />
        <div>
          {this.state.jobs.map(job => (
            <Card job={job} />
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
