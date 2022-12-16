import React from "react";
import NavScrollExample from "../Components/Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./PgConnecter.css";
import { Link } from "react-router-dom";
import SectionSvg from "../Components/SectionSvg/SectionSvg";
import axios from "axios";

function PgConnecter() {
  const [provider, setProvider] = useState({});
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setProvider({ ...provider, [e.target.name]: e.target.value });
  };
  const handleLogin = async () => {
    await axios
      .post("/api/login", provider)
      .then(async (res) => {
        await localStorage.setItem("token", res.data.token);
        await localStorage.setItem("isUser", res.data.isUser);
        await localStorage.setItem("isAdmin", res.data.isAdmin);
        await localStorage.setItem("isProvider", res.data.isProvider);
        await localStorage.setItem("id", res.data.id);
        if (localStorage.getItem("isProvider") == "true") {
          // navigate("/LayoutProvider");
          navigate("/dashboard");
        } else if (localStorage.getItem("isAdmin") == "true") {
          navigate("/allcarsForAdmin");
        }else if (localStorage.getItem("isUser") == "true") {
          navigate("/DashboardForUser");
        }
      })
      .catch((err) => {
        // console.dir(err);
        setError(err.response.data.message);
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setError("");
    }, 6000);
  }, [error]);
  return (
    <div>
      <h3 className="connexion">Connexion</h3>
      <div className="allBlocConnx">
        <div className="blocCreerCompte">
          <h5 style={{ color: "#30325d" }}>Vous n'avez pas un compte ?</h5>
           <ul style={{textAlign:'center'}}>
          <li><Link to="/creercompte" style={{ color: "#007bff" }}>
            {" "}
            Créer un compte locateur
          </Link></li>
          <li><Link to="/creercompteUser" style={{ color: "#007bff" }}>
            {" "}
            Créer un compte utilisateur
          </Link></li>
          </ul>
        </div>

        <div className="blocConx">
          <h5 className="connexion">Vous avez dèja un compte ?</h5>
          <form
            onChange={(e) => {
              handleChange(e);
            }}
          >
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="xx@gmail.com"
                name="email"
              />
            </div>

            <div className="form-group">
              <label>Mot de passe</label>
              <input
                type="password"
                className="form-control"
                placeholder="Mot de passe"
                name="motPass"
              />
            </div>
            {error && (
              <span style={{ color: "red", fontSize: "0.8em" }}>{error}</span>
            )}
          </form>
          <button
            type="button"
            className="btn btn-dark btn-lg btn-block"
            onClick={() => {
              handleLogin();
            }}
          >
            Connexion
          </button>
        </div>
      </div>
      <div style={{ marginTop: "30px" }}>
        <SectionSvg />
      </div>
    </div>
  );
}

export default PgConnecter;
