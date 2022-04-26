import React from 'react'
import './HeaderBlock.css'

const HeaderBlock = () => {
  return (
   <body>
  <div class="container">

<div class="gallery-container w-2 h-3">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?safari" alt="safari"/>
    </div>
    <div class="text">Nature</div>
  </div>
</div>

<div class="gallery-container w-2 h-2">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?black-people" alt="people"/>
    </div>
    <div class="text">People</div>
  </div>
</div>

<div class="gallery-container w-2 h-3">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?gorilla" alt="gorilla"/>
    </div>
    <div class="text">Animals</div>
  </div>
</div>

<div class="gallery-container w-2 h-2">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?africa-building" alt="city"/>
    </div>
    <div class="text">Architecture</div>
  </div>
</div>

<div class="gallery-container w-2 h-1">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?food" alt="food"/>
    </div>
    <div class="text">Food</div>
  </div>
</div>

<div class="gallery-container w-2 h-1">
  <div class="gallery-item">
    <div class="image">
      <img src="https://source.unsplash.com/1600x900/?flower" alt="travel"/>
    </div>
    <div class="text">Travel</div>
  </div>
</div>

</div>
   
   </body>
  )
}

export default HeaderBlock