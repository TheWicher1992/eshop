import React from 'react'

const MonthlyReports = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h5 className="card-title">Monthly Recap Report</h5>
            <div className="card-tools">
              <button type="button" className="btn btn-tool" data-card-widget="collapse">
                <i className="fas fa-minus" />
              </button>
              <div className="btn-group">
                <button type="button" className="btn btn-tool dropdown-toggle" data-toggle="dropdown">
                  <i className="fas fa-wrench" />
                </button>
                <div className="dropdown-menu dropdown-menu-right" role="menu">
                  <a href="#" className="dropdown-item">Action</a>
                  <a href="#" className="dropdown-item">Another action</a>
                  <a href="#" className="dropdown-item">Something else here</a>
                  <a className="dropdown-divider" />
                  <a href="#" className="dropdown-item">Separated link</a>
                </div>
              </div>
              <button type="button" className="btn btn-tool" data-card-widget="remove">
                <i className="fas fa-times" />
              </button>
            </div>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div className="row">
              <div className="col-md-8">
                <p className="text-center">
                  <strong>Sales: 1 Jan, 2014 - 30 Jul, 2014</strong>
                </p>
                <div className="chart">
                  {/* Sales Chart Canvas */}
                  <canvas id="salesChart" height={180} style={{ height: '180px' }} />
                </div>
                {/* /.chart-responsive */}
              </div>
              {/* /.col */}
              <div className="col-md-4">
                <p className="text-center">
                  <strong>Goal Completion</strong>
                </p>
                <div className="progress-group">
                  Add Products to Cart
                  <span className="float-right"><b>160</b>/200</span>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary" style={{ width: '80%' }} />
                  </div>
                </div>
                {/* /.progress-group */}
                <div className="progress-group">
                  Complete Purchase
                  <span className="float-right"><b>310</b>/400</span>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-danger" style={{ width: '75%' }} />
                  </div>
                </div>
                {/* /.progress-group */}
                <div className="progress-group">
                  <span className="progress-text">Visit Premium Page</span>
                  <span className="float-right"><b>480</b>/800</span>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success" style={{ width: '60%' }} />
                  </div>
                </div>
                {/* /.progress-group */}
                <div className="progress-group">
                  Send Inquiries
                  <span className="float-right"><b>250</b>/500</span>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-warning" style={{ width: '50%' }} />
                  </div>
                </div>
                {/* /.progress-group */}
              </div>
              {/* /.col */}
            </div>
            {/* /.row */}
          </div>
          {/* ./card-body */}
          <div className="card-footer">
            <div className="row">
              <div className="col-sm-3 col-6">
                <div className="description-block border-right">
                  <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 17%</span>
                  <h5 className="description-header">$35,210.43</h5>
                  <span className="description-text">TOTAL REVENUE</span>
                </div>
                {/* /.description-block */}
              </div>
              {/* /.col */}
              <div className="col-sm-3 col-6">
                <div className="description-block border-right">
                  <span className="description-percentage text-warning"><i className="fas fa-caret-left" /> 0%</span>
                  <h5 className="description-header">$10,390.90</h5>
                  <span className="description-text">TOTAL COST</span>
                </div>
                {/* /.description-block */}
              </div>
              {/* /.col */}
              <div className="col-sm-3 col-6">
                <div className="description-block border-right">
                  <span className="description-percentage text-success"><i className="fas fa-caret-up" /> 20%</span>
                  <h5 className="description-header">$24,813.53</h5>
                  <span className="description-text">TOTAL PROFIT</span>
                </div>
                {/* /.description-block */}
              </div>
              {/* /.col */}
              <div className="col-sm-3 col-6">
                <div className="description-block">
                  <span className="description-percentage text-danger"><i className="fas fa-caret-down" /> 18%</span>
                  <h5 className="description-header">1200</h5>
                  <span className="description-text">GOAL COMPLETIONS</span>
                </div>
                {/* /.description-block */}
              </div>
            </div>
            {/* /.row */}
          </div>
          {/* /.card-footer */}
        </div>
        {/* /.card */}
      </div>
      {/* /.col */}
    </div>

  )
}

export default MonthlyReports
