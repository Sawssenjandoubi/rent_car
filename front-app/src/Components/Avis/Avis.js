import React from 'react'
import AvisClients from '../AvisClients/AvisClients'
import 'bootstrap'
import './style.css'
function Avis() {
  return (
    
    <div className="product">
        {/*<img src="./image/air.png" alt="" className="productImg"/>*/}
        <div className="productDetails">
            <h1 className="productTitle">Vos avis nous inspirent</h1>
            <p className="productDesc">La satisfaction de nos clients est notre meilleure référence. 
            Nos avis clients 
            sont collectés par Avis-vérifiés, organisme indépendant certifié par l’AFNOR norme 
            NF Z74-501.</p>
            <div className="colors">
                <div className="color"></div>
                <div className="color"></div>
            </div>
            <button className="productButton">Ajouter Votre Avis!</button>
        </div>
        <AvisClients/>
        </div>
        
        
  )
}

export default Avis