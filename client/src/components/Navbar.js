import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const dispatch = useDispatch()
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">eshop</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/cart"><i className="fas fa-shopping-cart"></i>&nbsp;Cart</Link>
            </li>
            {!isAuthenticated && <li className="nav-item">
              <Link className="nav-link active" to="/login"><i className="fas fa-user"></i>&nbsp;Sign In</Link>
            </li>}
            {isAuthenticated && <li className="nav-item">
              <Link to="" onClick={() => dispatch({
                type: 'LOGOUT'
              })} className="nav-link active"><i className="fas fa-sign-out-alt"></i>&nbsp;Log Out</Link>
            </li>}
          </ul>
        </div>
      </div>
    </nav >
  )
}

export default Navbar
