import React from "react";
import "./contact.css";
import 'bootstrap'
function ContactTel() {
  return (
    <div >
      <h3 className="faq">Foire aux questions</h3>
     <div className="blocContact">
        <div className="allBloc ">
          <h5 className="contacterNous">Contacter Nous </h5>
          <h6 style={{ color: "#30426c" }}>Contactez-nous par téléphone au</h6>
          <div className="blocTel">
            <h5 className='tel'>78 000 000</h5>
            <p className="prixAppel">Service à 50 millimes/min</p>
          </div>
          <h6 style={{color:'#30426c'}}>ou par email à l'adresse suivante <span className="email"> service-clientele@rentacar.fr </span></h6>
        </div>
       </div> 
    </div>
  );
}

export default ContactTel;
