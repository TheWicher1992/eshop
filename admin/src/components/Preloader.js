import React from 'react'

const Preloader = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__wobble"
        src="dist/img/AdminLTELogo.png"
        alt="AdminLTELogo"
      />
    </div>
  )
}

export default Preloader
