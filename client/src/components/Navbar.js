import React from 'react'

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="/">eshop</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/cart"><i class="fas fa-shopping-cart"></i>&nbsp;Cart</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" href="/login"><i class="fas fa-user"></i>&nbsp;Sign In</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
