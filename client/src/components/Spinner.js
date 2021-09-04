import React from 'react'

const Spinner = ({ loading }) => {
  if (!loading) return <></>
  return (
    <div className="d-flex justify-content-center">
      <div className="spinner-border" style={{ height: 100, width: 100 }} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  )
}

export default Spinner
