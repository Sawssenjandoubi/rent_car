import React from 'react'
import NavScrollExample from '../Navbar/Navbar'
import ContactTel from './ContactTel/ContactTel'
import Footerr from '../footer/Footer'
import FAQ from './FAQ/FAQ'
import './style.css'

function PgAide() {
  return (
    <div>
      <ContactTel/>
    <div className="gallery">
    <div className="galleryItem">
        <h1 className="galleryTitle">Be Yourself!</h1>
        <img src="https://tse4.mm.bing.net/th?id=OIP.aEUUar0PfIDa6vIIfqAdCwHaLG&pid=Api&P=0"
            alt="" className="galleryImg"/>
    </div>
    <div className="galleryItem">
        <img src="https://tse2.mm.bing.net/th?id=OIP.8MFlgi2Cvf7T0IV_kGETZgHaNK&pid=Api&P=0"
            alt="" className="galleryImg"/>
        <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
    </div>
    <div className="galleryItem">
        <h1 className="galleryTitle">Just Do it!</h1>
        <img src="https://tse1.mm.bing.net/th?id=OIP.sRB5Zq8mbSLrGQJM1AGl3wHaJ4&pid=Api&P=0"
            alt="" className="galleryImg"/>
    </div>
</div>
<FAQ/>
<Footerr/>
</div>
  )
}

export default PgAide