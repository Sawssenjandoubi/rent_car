import React from 'react'
import './style.css'
import 'bootstrap'
import SectionSvg from '../SectionSvg/SectionSvg'
import Avis from '../Avis/Avis'
import Footerr from '../footer/Footer'

function FirstSection() {
  return (
    <div>
     
    <div className="newSeason">
    <div className="nsItem">
        <img src="https://tse1.mm.bing.net/th?id=OIP.EOb2MtzTSIvzGRUc-t-KdAHaHa&pid=Api&P=0"
            alt="" className="nsImg"/>
    </div>
    <div className="nsItem">
      
  <h3 className="nsTitleSm  col-sm-6 col-6">Guide de location de voiture</h3>
  <p>Vous aimeriez louer une voiture pour votre prochain voyage, mais vous ne savez pas
   par où commencer ? C’est tout à fait normal. Entre chercher le meilleur prix, vérifier 
   les options incluses, comparer les offres d’assurances et se renseigner sur les différentes
    régulations.
   </p>  
   <p> louer un véhicule n’est pas toujours simple. Mais heureusement, nous sommes là pour vous
     aider. Notre guide de location de voiture regroupe toutes 
     les informations qu’il vous faut.
     
     
     
     
     
     </p>
            <button className="nsButton">Trouver une voiture</button>
        
    </div>
    <div className="nsItem">
        <img src="https://tse3.mm.bing.net/th?id=OIP.e9MDOarIqGzCe4GJV_GSugHaE8&pid=Api&P=0"
            alt="" className="nsImg"/>
    </div>
</div>
<SectionSvg/>
<Avis/>
<Footerr/>
</div>
  )
}

export default FirstSection