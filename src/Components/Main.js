import React from 'react'

function Main() {
  return (
    <>
      <div id="carouselExampleIndicators" class="carousel slide">
  <div class="carousel-indicators spot">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" id='round' class="active button" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" id='round1' aria-label="Slide 2"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item firstimg active">
        <h2 className='mainh1'>Don't miss amazing <br /> grocery deals</h2>
        <h6 className='mainh2'>Sign up for the daily newsletter</h6>
       
        <form class="input-group email">
<img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-plane.png" class='sendemail' alt="" /> 
 
  <input type="text" class="form-control emailinput" placeholder="Your email address" aria-label="Search Items" aria-describedby="button-addon2"/>
  
<div class="input-group-prepend">
    <button class="btn btnsubs " type="button" aria-haspopup="true" aria-expanded="false">
      Subscribe <i class="fas fa-caret-down"></i>
    </button>

  </div>
</form>

    </div>
    <div class="carousel-item secondimg ">
    <h2 className='mainh1'>Don't miss amazing <br /> grocery deals</h2>
        <h6 className='mainh2'>Sign up for the daily newsletter</h6>
       
        <form class="input-group email">
<img src="https://nest-frontend.netlify.app/assets/imgs/theme/icons/icon-plane.png" class='sendemail' alt="" /> 
 
  <input type="text" class="form-control emailinput" placeholder="Your email address" aria-label="Search Items" aria-describedby="button-addon2"/>
  
<div class="input-group-prepend">
    <button class="btn btnsubs " type="button" aria-haspopup="true" aria-expanded="false">
      Subscribe <i class="fas fa-caret-down"></i>
    </button>

  </div>
</form>
    </div>
    
  </div>
 
</div>

    </>
  )
}

export default Main
