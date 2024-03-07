import React from 'react'

function Header() {
  return (
    <>
     <nav className="navbar header navbar-expand-lg navbar-light bg-whight">
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">Navbar w/ text</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " aria-current="page" href="/">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"> <font color="lightgrey">|</font> My Account</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/"><font color="lightgrey">|</font> Wishlist</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href="/"><font color="lightgrey">|</font> Order Tracking</a>
        </li>
      </ul>
    </div>
    <div className="collapse navbar-collapse" id="navbarText">
      <span className="navbar-text">
        Super Value Deals-Save more with coupons
      </span>
    </div>
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="/">Need help?Call us: <font color="green">+1800900</font></a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <font color="lightgrey">|</font> English
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <font color="lightgrey">|</font> USD
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header
