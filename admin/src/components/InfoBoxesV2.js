import React from 'react'

const InfoBoxesV2 = () => {
  return (
    <>
      <div className="info-box mb-3 bg-warning">
        <span className="info-box-icon">
          <i className="fas fa-tag" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Inventory</span>
          <span className="info-box-number">5,200</span>
        </div>
        {/* /.info-box-content */}
      </div>
      {/* /.info-box */}
      <div className="info-box mb-3 bg-success">
        <span className="info-box-icon">
          <i className="far fa-heart" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Mentions</span>
          <span className="info-box-number">92,050</span>
        </div>
        {/* /.info-box-content */}
      </div>
      {/* /.info-box */}
      <div className="info-box mb-3 bg-danger">
        <span className="info-box-icon">
          <i className="fas fa-cloud-download-alt" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Downloads</span>
          <span className="info-box-number">114,381</span>
        </div>
        {/* /.info-box-content */}
      </div>
      {/* /.info-box */}
      <div className="info-box mb-3 bg-info">
        <span className="info-box-icon">
          <i className="far fa-comment" />
        </span>
        <div className="info-box-content">
          <span className="info-box-text">Direct Messages</span>
          <span className="info-box-number">163,921</span>
        </div>
        {/* /.info-box-content */}
      </div>
    </>
  )
}

export default InfoBoxesV2
