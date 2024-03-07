import React from 'react'

function Navbar() {
  return (
    <>
    <nav class="navbar Navbar navbar-light navbar-expand-lg bg-white d-flex">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
      <img src="https://nest-frontend.netlify.app/assets/imgs/theme/logo.svg" alt="" width="200" height="100" class="d-inline-block align-text-top"/>
     
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
  </div>
  <div class="container-fluid">
   
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <form class="input-group">
  <div class="input-group-prepend">
    <button class="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      All Categories <i class="fas fa-caret-down"></i>
    </button>
    <ul class="dropdown-menu">
      <li><a class="dropdown-item" href="/">Category 1</a></li>
      <li><a class="dropdown-item" href="/">Category 2</a></li>
    </ul>
  </div>
  <input type="text" class="form-control" placeholder="Search for items.." aria-label="Search Items" aria-describedby="button-addon2"/>
  
<img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/search.png" class='search' alt="" /> 

</form>

{/* <div className='logos'> */}
<div class="image-grid">
  <div class="image-container position-relative">
    <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-compare.svg" alt="" class="img-fluid navimg"/>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    3
  </span>
  </div>
  <p className='greyname'>Compare</p>

  <div class="image-container">
    <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-heart.svg" alt="" class="img-fluid navimg"/>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    6
  </span>
  </div>
  <p className='greyname'>Wishlist</p>

  <div class="image-container">
    <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-cart.svg" alt="" class="img-fluid navimg"/>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
    2
  </span>
  </div>
  <p className='greyname'>Cart</p>

  <div class="image-container">
    <img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-user.svg" alt="" class="img-fluid navimg"/>
  </div>
</div>
<p className='greyname'>Account</p>

{/* </div> */}
   
    </div>
  </div>
{/* </nav> */}
</nav>

</>
  )
}

export default Navbar
