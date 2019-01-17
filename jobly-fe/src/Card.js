import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component {
  // Can refactor later to make it easier to read:
  // renderCompanyDetails()
  // renderJobDetails

  render() {
    const { job, company } = this.props;
    return (
      <div className="container text-left mt-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title d-flex text-dark">
              {company ? (
                <div className="d-flex justify-content-between">
                  <i class="fas fa-warehouse" />

                  <Link
                    to={`/companies/${company.handle}/`}
                    style={{ color: 'black' }}
                  >
                    {company.name}
                  </Link>
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
                  <button className="btn btn-danger float-right">
                    I am fake Apply
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
