import React from 'react'
import 'bootstrap'
import './style.css'
function ContactTel() {
  return (
    <div className='container' >
    <h3 style={{color:'#30325d',display:'flex',justifyContent:'flex-start'}}>Foire aux questions</h3>
    <div className='allBloc'>
      <h5 style={{color:'#30325d'}}>Contacter Nous </h5>
      <h6 style={{color:'#30426c'}}>Contactez-nous par téléphone au</h6>
      <div className='Bloctel'>
        <h5 className='tel'>78 000 000</h5>
        <p className='prixappel'>Service à 50 millimes/min</p>
      </div>
      <h6 style={{color:'#30426c'}}>ou par email à l'adresse suivante <span class="email"> service-clientele@rentacar.fr </span></h6>
    </div>
    </div>
  )
}

export default ContactTel