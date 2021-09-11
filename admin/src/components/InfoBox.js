import React from 'react'

const InfoBox = ({ title, value, variant, icon }) => {
  return (
    <div className="info-box">
      <span className={`info-box-icon bg-${variant} elevation-1`}><i className={icon} /></span>
      <div className="info-box-content">
        <span className="info-box-text">{title}</span>
        <span className="info-box-number">
          {value}
        </span>
      </div>
      {/* /.info-box-content */}
    </div >
  )
}

export default InfoBox
