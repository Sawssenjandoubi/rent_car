import React from 'react'
import './style.css'
function SecondSection() {
  return (
    <div className="gallery">
   <div class="galleryItem">
            <h1 class="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                alt="" class="galleryImg"/>
        </div>
    <div className="galleryItem">
        <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt="" className="galleryImg"/>
        <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
    </div>
    <div className="galleryItem">
        <h1 className="galleryTitle">Just Do it!</h1>
        <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""className="galleryImg"/>
    </div>
</div>
  )
}

export default SecondSection