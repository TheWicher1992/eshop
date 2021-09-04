import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="/">eshop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/cart"><i className="fas fa-shopping-cart"></i>&nbsp;Cart</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="/login"><i className="fas fa-user"></i>&nbsp;Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
