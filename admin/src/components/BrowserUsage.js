import React from 'react'

const BrowserUsage = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">Browser Usage</h3>
        <div className="card-tools">
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="collapse"
          >
            <i className="fas fa-minus" />
          </button>
          <button
            type="button"
            className="btn btn-tool"
            data-card-widget="remove"
          >
            <i className="fas fa-times" />
          </button>
        </div>
      </div>
      {/* /.card-header */}
      <div className="card-body">
        <div className="row">
          <div className="col-md-8">
            <div className="chart-responsive">
              <canvas id="pieChart" height={150} />
            </div>
            {/* ./chart-responsive */}
          </div>
          {/* /.col */}
          <div className="col-md-4">
            <ul className="chart-legend clearfix">
              <li>
                <i className="far fa-circle text-danger" /> Chrome
              </li>
              <li>
                <i className="far fa-circle text-success" /> IE
              </li>
              <li>
                <i className="far fa-circle text-warning" /> FireFox
              </li>
              <li>
                <i className="far fa-circle text-info" /> Safari
              </li>
              <li>
                <i className="far fa-circle text-primary" /> Opera
              </li>
              <li>
                <i className="far fa-circle text-secondary" />{" "}
                Navigator
              </li>
            </ul>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.card-body */}
      <div className="card-footer bg-light p-0">
        <ul className="nav nav-pills flex-column">
          <li className="nav-item">
            <a href="#" className="nav-link">
              United States of America
              <span className="float-right text-danger">
                <i className="fas fa-arrow-down text-sm" />
                12%
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              India
              <span className="float-right text-success">
                <i className="fas fa-arrow-up text-sm" /> 4%
              </span>
            </a>
          </li>
          <li className="nav-item">
            <a href="#" className="nav-link">
              China
              <span className="float-right text-warning">
                <i className="fas fa-arrow-left text-sm" /> 0%
              </span>
            </a>
          </li>
        </ul>
      </div>
      {/* /.footer */}
    </div>

  )
}

export default BrowserUsage
