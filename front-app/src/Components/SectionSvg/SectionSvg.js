import React from 'react'
import 'bootstrap'
import logo1svg from './FirstSvg.svg'
import annulationSvg from './annulation.svg'
import aideSvg from './aide.svg'
import engagementSvg from './engagement.svg'
import {Link} from 'react-router-dom'
import './style.css'
function SectionSvg() {
  return (

<div className="features">
        <div className="feature">
            <img src={logo1svg}alt="" className="featureIcon"/>
            <span className="featureTitle">SERVICE 100% SECURISE</span>
            <span className="featureDesc">Réserver en toute sècurité.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src={annulationSvg} alt=""/>
            <span className="featureTitle">ANNULATION GRATUITE</span>
            <span className="featureDesc">Voir nos conditions.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src={aideSvg} alt=""/>
           
           <span className="featureTitle ">
           < Link to ="/aide" className="aide">
            BESOIN D'AIDE ?
            </Link>
            </span> 
         
         <span className="featureDesc">Nous répondons à toute vos questions.</span>
        </div>
        <div className="feature">
            <img className="featureIcon" src={engagementSvg}alt=""/>
            <span className="featureTitle">NOS ENGAGEMENT</span>
            <span className="featureDesc">+Proche ,- Cher.</span>
        </div>
    </div>


  )
}

export default SectionSvg