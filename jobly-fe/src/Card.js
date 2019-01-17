import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Card extends Component {
  render() {
    //  const {name, handle} =this.props
    return (
      <div className="container text-left mt-2">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title d-flex text-dark">
              {/* {this.props.company.name} */}
              {Object.keys(this.props)[0] === 'company' ? (
                <div className="d-flex justify-content-between">
                  <i class="fas fa-warehouse" />

                  <Link
                    to={`/companies/${this.props.company.handle}/`}
                    style={{ color: 'black' }}
                  >
                    {this.props.company.name}
                  </Link>
                </div>
              ) : (
                this.props.job.title
              )}
            </h5>
            <p className="card-text text-dark">
              {Object.keys(this.props)[0] === 'company' ? (
                <Link
                  to={`/companies/${this.props.company.handle}/`}
                  className="text-dark"
                >
                  {this.props.company.description}
                </Link>
              ) : (
                <div>
                  <ul style={{ listStyleType: `none` }}>
                    <li>Salary: {this.props.job.salary}</li>
                    <li>Equity: {this.props.job.equity}</li>
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
