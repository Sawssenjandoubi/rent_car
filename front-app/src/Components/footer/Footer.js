import React from 'react'
import './style.css'
import logofb from '../../assets/facebook.png'
import logoinstagramme from '../../assets/instagram.png'
import logotwitter from '../../assets/twitter.png'
import logowhatsapp from '../../assets/whatsapp.png'
function footer() {
  return (
    <footer>
    <div className="footerLeft">
    <div className="footerMenu">
        <h1 className="fMenuTitle">Entreprise</h1>
        <ul className="fList">
            <li className="fListItem">A propos</li>
            <li className="fListItem"> Blog</li>
            <li className="fListItem">Notre fonctionnement</li>
            <li className="fListItem">Mention légales</li>
            <li className="fListItem">Voyage responsable</li>
        </ul>
    </div>
    <div className="footerMenu">
                <h1 className="fMenuTitle">Liens utiles</h1>
                <ul className="fList">
                    <li className="fListItem">Support</li>
                    <li className="fListItem">Remboursement</li>
                    <li className="fListItem">FAQ</li>
                    <li className="fListItem">Feedback</li>
                    <li className="fListItem">Stories</li>
                </ul>
            </div>
            <div className="footerMenu">
                <h1 className="fMenuTitle">Voitures</h1>
                <ul className="fList">
                    <li className="fListItem">Berline</li>
                    <li className="fListItem">Cabriolet</li>
                    <li className="fListItem">Roadster</li>
                    <li className="fListItem">Familiale</li>
                    <li className="fListItem">4x4</li>
                </ul>
            </div>
    </div>
    <div className="footerRight">
    <div className="footerRightMenu">
                <h1 className="fMenuTitle">Abonnez-vous</h1>
                <div className="fMail">
                    <input type="text" placeholder="ton@email.com" className="fInput"/>
                    <button className="fButton">rejoindre!</button>
                </div>
            </div>
            <div className="container-fluid footerRightMenu">
                <h1 className="fMenuTitle">Suivez-Nous</h1>
                <div className="img-fluid fIcons d-flex justify-content-center align-items-center " >
                    <img src={logofb} alt="" className="fIcon"/>
                    <img src={logoinstagramme} alt="" className="fIcon"/>
                    <img src={logotwitter} alt="" className="fIcon"/>
                    <img src={logowhatsapp} alt="" className="fIcon"/>
                </div>
                
            </div>
            <div className="footerRightMenu">
                <span className="copyright">Tous les droits réservès. 2022.</span>
            </div>

    </div>
    
    </footer>
  )
}

export default footer