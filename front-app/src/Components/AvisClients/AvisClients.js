import React from 'react'
import './style.css'
import 'bootstrap'
import femme_avis from '../../assets/femme_avis.jpg'
import StarsRating from 'stars-rating'

function AvisClients() {
  return (
    <div className='container-fluid  container-md w-50 h-50 row m-5 col-sm-6 col-md-4 col-lg-3 product '  style={{display:'block',backgroundColor:'white'}}>
        <div>
        <img src={femme_avis} alt='logo'  className="img-fluid float-start" width={'39%'} height={'20%'}/>
        </div>
    
    <div className="productDesc  mt-5 mr-5 py-3 ">
          <StarsRating className="d-flex justify-content-center mt-5 mr-5 py-3"
          count={5}
          size={24}
          value={5}
          color2={'pink'} />
        <p className="productDesc mr-5 py-3 " style={{height:'50%'}}>Accueil chaleureux, 
        explications claires. Nous avons pu récupérer 
        la voiture rapidement et la restituer très rapidement également ! 
        Voitures neuves et propres.
        </p>
    </div>
    </div>
  )
}

export default AvisClients