

import React, { useState, useEffect } from "react";
import "./Styles.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import swal from "sweetalert";
import { PulseLoader } from "react-spinners";
import "./Styles.css" ;

function RegisterProvider() {
  const [newUser, setNewUser] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
    console.log(newUser);
  };
  const navigate = useNavigate();
  const [registerError, setRegisterError] = useState("");
  const handleSubmit = async () => {
    setLoading(true);
    await axios
      .post("/api/add_provider", newUser)
      .then((response) => {
        console.log(response);

        if (response) {
          setLoading(false);
          swal(
              "Bienvenu!",
              "Votre compte a été créé avec succès! .",
              "succès"
          ).then((result) => {
              if (result) {
                navigate("/connecter");
              }
          });
      }
      })
      .catch((error) => {
        if (error) {
          setLoading(false);
          setRegisterError(error.response.data.error);
          console.log(registerError)
      }
        
      });
  };
  useEffect(() => {
    setTimeout(() => {
        setRegisterError("");
    }, 15000);
}, [registerError]);

  return (
    <form
      onChange={(e) => handleChange(e)}
      style={{
        width: "50%",
        backgroundColor: "white",
        marginLeft: "25%",
        borderRadius: "25px",
        marginTop: "20px",
        height: "100%",
        padding:"20px"
      }}
    >
      <h3>Inscription</h3>

      <div className="form-group">
        <label>Nom</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Joe"
          name="nom"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>

      <div className="form-group">
        <label>Prènom</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g Doe"
          name="prenom"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>Numèro de Tèlèphone</label>
        <input
          type="text"
          className="form-control"
          placeholder=" e.g 26303548"
          name="tel"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>Fax</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g 78963214"
          name="fax"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>cin</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g 14563289"
          name="cin"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>ville</label>
        <select
          className="form-control"
          name="ville"
        >
          <option>Beja</option>
          <option>Tunis</option>
          <option>Bizerte</option>
          </select>
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>NomAgence</label>
        <input
          type="text"
          className="form-control"
          placeholder="e.g agence xxx"
          name="nomAgence"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>date naissance</label>
        <input
          type="date"
          className="form-control"
          placeholder="e.g 24/07/1997"
          name="dateNaissance"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          className="form-control"
          placeholder="e.g xxx@gmail.com"
          name="email"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>

      <div className="form-group">
        <label>Password</label>
        <input
          type="password"
          className="form-control"
          placeholder="Votre mot de passe "
          name="motPass"
        />
        {registerError && (
                            <span style={{ color: "red", fontSize: "0.8em" }}>
                                {registerError}
                            </span>
                        )}
      </div>

     <button
        type="button"
        className="btn btn-dark btn-lg btn-block"
        onClick={() => handleSubmit()}
      >
         {loading ? (
                                <PulseLoader size={8} color={"#ffffff"} />
                            ) : (
                                " Creer un compte"
                            )}
       
      </button>
      {registerError && (
                        <span style={{ color: "red", fontSize: "0.8em" }}>
                            Veuillez rèessayer
                        </span>
                    )}
     
    </form>
  );
}

export default RegisterProvider;
