import React from 'react'

function Navbarsecond() {
    const dealsLinkStyle = {
        color: 'green', // Change to your desired hover color
      };
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-white secondnav">
  <div class="container-fluid">



  <div class="btn-group" role="group">
    <button id="btnGroupDrop1" type="button" class="btn btn-success dropdown-toggle category" data-bs-toggle="dropdown" aria-expanded="false">
      Browse All Categories
    </button>
    <ul class="dropdown-menu" aria-labelledby="btnGroupDrop1">
      <li><a class="dropdown-item" href="/">Dropdown link</a></li>
      <li><a class="dropdown-item" href="/">Dropdown link</a></li>
    </ul>
</div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item d-flex">
            <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-hot.svg" className='deal' alt="" />
          <a class="nav-link active deals-link" aria-current="page" href="/">Deals</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle deals-link" href="/" style={dealsLinkStyle} id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Home
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active deals-link" href="/">About</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle deals-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle deals-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vendors
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle deals-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           Mega menu
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle deals-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Blog
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link active dropdown-toggle deals-link" href="/" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Pages
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="/">Action</a></li>
            <li><a class="dropdown-item" href="/">Another action</a></li>
            <li><a class="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active deals-link" href="/" >Contact</a>
        </li>
        
      </ul>
      <div class="nav-item newone d-flex ms-5">
      <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-headphone.svg" className='headimg' alt="" />

          <p class="nav-link active deals-link1" href="/" ><font color="green">1900-888</font> <br /> 24/7 Support Center</p>
        </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbarsecond
