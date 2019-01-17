import React, { Component } from 'react';
//import axios from 'axios';
import JoblyApi from './JoblyApi';
import Card from './Card';
import SearchBar from './SearchBar';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = { Jobs: [] };
    this.updateSearch = this.updateSearch.bind(this);
  }

  async componentDidMount() {
    const AllJobs = await JoblyApi.getAllJobs();
    this.setState({ Jobs: AllJobs });
  }

  // get the searchedJobs
  async updateSearch(jobName) {
    const filteredJobs = await JoblyApi.searchJob(jobName);
    this.setState({ Jobs: filteredJobs });
  }

  render() {
    //const Jobs = this.props.data;

    return (
      <div>
        <h1> Jobs </h1>
        <SearchBar updateSearch={this.updateSearch} />
        <div>
          {this.state.Jobs.map(job => (
            <Card job={job} />
          ))}
        </div>
      </div>
    );
  }
}

export default Jobs;
