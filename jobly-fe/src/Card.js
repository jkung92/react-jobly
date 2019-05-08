import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import JoblyApi from './JoblyApi';

class Card extends Component {
  // Can refactor later to make it easier to read:
  // renderCompanyDetails()
  // renderJobDetails
  handleApply = async () => {
    // When button is clicked, state should be set to 'applied'
    // call the api to update database -> appications table
    await JoblyApi.apply(this.props.job.id, this.props.username, 'applied');
    // update the state of Job to "applied"
    this.props.updateJobs();
  };

  render() {
    const { job, company } = this.props;

    return (
      <div className="container text-left mt-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title d-flex text-dark">
              {company ? (
                <div className="d-flex justify-content-between">
                  <Link
                    to={`/companies/${company.handle}/`}
                    style={{ color: 'black' }}
                  >
                    {company.name}
                  </Link>
                  <div>
                    <i className="fas fa-building" />
                  </div>
                </div>
              ) : (
                job.title
              )}
            </h5>
            <p className="card-text text-dark">
              {company ? (
                <Link
                  to={`/companies/${company.handle}/`}
                  className="text-dark"
                >
                  {company.description}
                </Link>
              ) : (
                <div>
                  <ul style={{ listStyleType: `none` }}>
                    <li>Salary: {job.salary}</li>
                    <li>Equity: {job.equity}</li>
                  </ul>
                  <button
                    onClick={this.handleApply}
                    className="btn btn-danger float-right"
                    disabled={job.state === 'applied' ? true : false}
                  >
                    {job.state === 'applied' ? 'Applied' : 'Apply'}
                  </button>
                </div>
              )}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
