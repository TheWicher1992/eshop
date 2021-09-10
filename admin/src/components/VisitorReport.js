import React from 'react'

const VisitorReport = () => {
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title">US-Visitors Report</h3>
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
      <div className="card-body p-0">
        <div className="d-md-flex">
          <div
            className="p-1 flex-fill"
            style={{ overflow: "hidden" }}
          >
            {/* Map will be created here */}
            <div
              id="world-map-markers"
              style={{ height: "325px", overflow: "hidden" }}
            >
              <div className="map" />
            </div>
          </div>
          <div className="card-pane-right bg-success pt-2 pb-2 pl-4 pr-4">
            <div className="description-block mb-4">
              <div className="sparkbar pad" data-color="#fff">
                90,70,90,70,75,80,70
              </div>
              <h5 className="description-header">8390</h5>
              <span className="description-text">Visits</span>
            </div>
            {/* /.description-block */}
            <div className="description-block mb-4">
              <div className="sparkbar pad" data-color="#fff">
                90,50,90,70,61,83,63
              </div>
              <h5 className="description-header">30%</h5>
              <span className="description-text">Referrals</span>
            </div>
            {/* /.description-block */}
            <div className="description-block">
              <div className="sparkbar pad" data-color="#fff">
                90,50,90,70,61,83,63
              </div>
              <h5 className="description-header">70%</h5>
              <span className="description-text">Organic</span>
            </div>
            {/* /.description-block */}
          </div>
          {/* /.card-pane-right */}
        </div>
        {/* /.d-md-flex */}
      </div>
      {/* /.card-body */}
    </div>

  )
}

export default VisitorReport
