import React from 'react'
import './style.css'
import 'bootstrap'
import axios from "axios";
function EssaiRegister() {
    
        const [newUser, setNewUser] = React.useState({});
      
        const handleChange = (e) => {
          setNewUser({ ...newUser, [e.target.name]: e.target.value });
          console.log(newUser);
        };
      const handleSubmit = async () => {
        await axios
          .post("/api/add_provider", newUser)
          .then((response) => {
            console.log(response);
    
          })
          .catch((error) => {
            console.dir(error);
          });
      };
  return (
    <section className="h-100 h-custom gradient-custom-2">
    <form className="container py-5 h-100"  >
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12" >
          <div className="card card-registration card-registration-2" style={{borderRadius: "15px"}}>
            <div className="card-body p-0">
             
                <div >
                  <div className="p-5">
                    <h3 className="fw-normal mb-5">Contact Dètails</h3>
  
                    <div className="mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input type="date"
                          
                         className="form-control form-control-lg" 
                         name='dateNaissance'
                         />
                        <label className="form-label" >Date de Naissance</label>
                      </div>
                    </div>
  
                    <div className="mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input 
                        type="text" 
                        id="form3Examplea3" 
                        className="form-control form-control-lg" 
                        placeholder='26365418'
                        name='tel'
                       />
                        <label className="form-label" >Télèphone</label>
                      </div>
                    </div>
  
                   
                    <div className="mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input 
                        type="text" 
                        
                         className="form-control form-control-lg" 
                         placeholder='78963215'
                         name='fax'
                         />
                        <label className="form-label" >Fax</label>
                      </div>
                    </div>
                         
  
                    <div className="mb-4 pb-2">
                      <div className="form-outline form-white">
                        <select  className="form-control form-control-lg" 
                        name='ville'
                         >
                            <option onChange={(e)=> handleChange(e)}> Beja</option>
                            <option onChange={(e)=> handleChange(e)}>Tunis</option>
                            <option onChange={(e)=> handleChange(e)}>Bizerte</option>
  </select>
                          
                        <label className="form-label" >Ville</label>
                      </div>
                    </div>
  
                    
                    <div className="mb-4 pb-2">
                      <div className="form-outline form-white">
                        <input
                         type="password" 
                         
                         className="form-control form-control-lg"
                         name=' motPass'
                         />
                        <label className="form-label" >Mot de Passe</label>
                      </div>
                    </div>
  
                    <div className="mb-4">
                      <div className="form-outline form-white">
                        <input 
                        type="text" 
                        id="form3Examplea9" 
                        className="form-control form-control-lg" 
                        placeholder='xxx@gmail.com'
                        name='email'
                       />
                        <label className="form-label" >Email</label>
                      </div>
                    </div>
  
                    <div className="form-check d-flex justify-content-start mb-4 pb-3">
                      <input className="form-check-input me-3" type="checkbox" value="" />
                      <label className="form-check-label text-white" >
                      J'accepte les termes et conditions de votre site.
                      </label>
                    </div>
  
                    <button 
                    type="button" 
                    className="btn btn-light btn-lg"
                      data-mdb-ripple-color="dark"
                      onClick={() => handleSubmit()}>Créer Compte</button>
  
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </div>
     
    </form>
  </section>
  )
}

export default EssaiRegister