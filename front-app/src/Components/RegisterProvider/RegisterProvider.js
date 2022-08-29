import React from 'react'
import './Styles.css';
import logo from '../../assets/logo.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
function RegisterProvider() {
  return (
    <>
   
   <div className='header'>
    <img src={logo} alt="logo" />
    </div>
    <hr></hr>
    
    <div className="Auth-form-container-register "  >
            <form className="Auth-form" style={{marginTop:'20%'}}>
            <div className='logo-holder'>
      <div className='logo-car' >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="25"><path fill="none"  d="M0 0h24v24H0z"/><path d="M19 20H5v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-7.5l-1.243-.31A1 1 0 0 1 0 12.22v-.72a.5.5 0 0 1 .5-.5H2l2.48-5.788A2 2 0 0 1 6.32 4H17.68a2 2 0 0 1 1.838 1.212L22 11h1.5a.5.5 0 0 1 .5.5v.72a1 1 0 0 1-.757.97L22 13.5V21a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1zm1-2v-5H4v5h16zM5.477 11h13.046a1 1 0 0 0 .928-1.371L18 6H6L4.549 9.629A1 1 0 0 0 5.477 11zM5 14c2.317 0 3.879.755 4.686 2.264a.5.5 0 0 1-.441.736H6a1 1 0 0 1-1-1v-2zm14 0v2a1 1 0 0 1-1 1h-3.245a.5.5 0 0 1-.44-.736C15.12 14.754 16.682 14 19 14z"/></svg>
      </div>
    </div>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Créer Compte</h3>
                    <div className="form-group mt-3">
                        <label>Nom</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Sawssen "
                            name="nom"
                            autoComplete=""
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Prénom</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jandoubi"
                            name="prenom"
                            autoComplete=""
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Cin</label>
                        <input
                            type="tel"
                            className="form-control mt-1"
                            placeholder="e.g 12345678"
                            name="cin"
                            autoComplete=""
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>télèphone</label>
                        <input
                            type="tel"
                            className="form-control mt-1"
                            placeholder="e.g 12345678"
                            name="tel"
                            autoComplete=""
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Fax</label>
                        <input
                            type="tel"
                            className="form-control mt-1"
                            placeholder="e.g 70100000"
                            name="fax"
                            autoComplete=""
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email </label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="xxx@gmailcom"
                            name="email"
                            autoComplete=""
                        />
                    </div>
                    <div  className="form-group mt-3"style={{display :'flex',justifyContent:'space-between',textAlign:'center'}}>
                    <div>
                        
                        <label>Ville</label>
                        <select className="form-control mt-1" name="ville">
                            <option>Ariana</option>
                            <option>Beja</option>
                            <option>Ben Arous</option>
                            <option>Bizerte</option>
                            <option>Gabes</option>
                            <option>Gafssa</option>
                            <option>Jendouba</option>
                            <option>Kairouan</option>
                            <option>Kasserine</option>
                            <option>Le Kef</option>
                            <option>Kebili</option>
                            <option>Ariana</option>
                            <option>La Manouba</option>
                            <option>Méstir</option>
                            <option>Mahdia</option>
                            <option>Médenine</option>
                            <option>Nabeul</option>
                            <option>Safax</option>
                            <option>Sidi Bouzid</option>
                            <option>Séliana</option>
                            <option>Sousse</option>
                            <option>Tataouine</option>
                            <option>Tozeur</option>
                            <option>Tunis</option>
                            <option>Zaghouan</option>
                        </select>
                    </div>
                    <div >
                        <label>Date de Naissance</label>
                        <input
                            type="date"
                            className="form-control mt-1"
                            
                            
                            autoComplete=""
                        />
                    </div>
                    </div>
                    <div className="form-group mt-3">
                        <label>Agence</label>
                        <input
                            type="string"
                            className="form-control mt-1"
                            placeholder="Nom ou Matricule de votre agence"
                            name=" nomAgence"
                            autoComplete=""
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Mot de Passe</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Votre mot de passe "
                            name="motPass"
                            autoComplete=""
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button
                            type="button"
                            className="btn btn-primary"
                            
                        >
                            Créer Compte
                        </button>
                    </div>
                    
                </div>
            </form>
        </div>
    </>
  )
}

export default RegisterProvider